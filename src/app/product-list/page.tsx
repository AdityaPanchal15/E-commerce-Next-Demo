'use client';
import React, { useEffect } from 'react';
import ProductCard from './components/ProductCard';
import { Grid } from '@mui/material';
import { getProducts } from '../redux/products/actions';
import { connect } from 'react-redux';

type product = {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  id: number;
};

function ProductList({
  products,
  cartProducts,
  fetchProducts,
}: {
  products: Array<product>;
  cartProducts: Array<product>;
  fetchProducts: () => any;
}) {
  const isCartProduct = (id: number) => {
    return cartProducts.findIndex((item) => item.id === id) >= 0;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product: product, i: number) => {
          return (
            <Grid item xs={3} key={i}>
              <ProductCard product={product} isAdded={isCartProduct(product.id)} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    products: state.products.data as Array<product>,
    cartProducts: state.cart.data as Array<product>,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchProducts: (): any => dispatch(getProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
