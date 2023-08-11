import { removeCartItem } from '@/app/redux/cart/actions';
import { CardContent, Box, Typography, CardActions, Button, Card } from '@mui/material';
import { connect } from 'react-redux';

function Product({ product, removeItem }: any) {
  return (
    <>
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <img src={product.imageUrl} alt="product-image" width="130px" />
        <Box component="div" width="90%">
          <Typography variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography sx={{ my: 1, fontWeight: 'bold' }} color="text.secondary">
            Price: &#8377;{product.price}
          </Typography>
          <Typography sx={{ my: 1, fontWeight: 'bold' }} color="text.secondary">
            Quantity: {product.quantity}
          </Typography>
          <Typography variant="body2">{product.description}</Typography>
        </Box>
        <CardActions sx={{ p: 0, alignSelf: 'baseline', mt: '10px' }}>
          <Button size="small" sx={{ p: 0 }} onClick={() => removeItem(product.id)}>
            Remove
          </Button>
        </CardActions>
      </CardContent>
    </>
  );
}

function CartProducts({ cartItems, removeCartItem }: any) {
  return (
    <Box sx={{ minWidth: 275 }}>
      {cartItems.map((item: any, i: number) => {
        return (
          <Card variant="outlined" sx={{ mb: '10px' }} key={i}>
            <Product product={item} removeItem={removeCartItem} />
          </Card>
        );
      })}
    </Box>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cartItems: state.cart.data,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeCartItem: (id: number) => dispatch(removeCartItem({ id })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProducts);
