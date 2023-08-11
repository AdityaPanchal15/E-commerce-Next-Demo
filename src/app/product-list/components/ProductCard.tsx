import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useEffect, useState } from 'react';
import { addToCart, changeProductQuantity } from '@/app/redux/cart/actions';
import { connect } from 'react-redux';
import QuantityButton from '@/app/components/buttons/QuantityButton';

function ProductCard({ product, addToCart, isAdded, changeProductQuantity }: any) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isAdded) {
      changeProductQuantity({ productId: product.id, quantity: quantity });
    }
  }, [quantity]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {product.name}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.title}
        subheader={product.date}
      />
      <CardMedia component="img" height="194" image={product.imageUrl} alt="Paella dish" />
      <CardContent>
        <Typography variant="body1" color="text.secondary" sx={{ mb: '10px', fontWeight: 'bold' }}>
          Price: &#8377;{product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description.substr(0, 200) + '...'}
        </Typography>
      </CardContent>
      <CardContent>
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            {isAdded ? (
              <QuantityButton value={quantity} setValue={setQuantity} />
            ) : (
              <Button variant="contained" sx={{ margin: '0' }} color="primary" onClick={() => addToCart({ ...product, quantity: 1 })}>
                Add to Cart
              </Button>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (payload: any) => dispatch(addToCart(payload)),
    changeProductQuantity: (payload: any) => dispatch(changeProductQuantity(payload)),
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);
