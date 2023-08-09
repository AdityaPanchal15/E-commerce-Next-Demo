import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import { addToCart } from '@/app/redux/cart/actions';
import { connect } from 'react-redux';

function ProductCard({ product, addToCart }: any) {
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
      <Button variant="contained" sx={{ margin: '0 0 10px 15px' }} color="primary" onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </Card>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (payload: any) => dispatch(addToCart(payload)),
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);
