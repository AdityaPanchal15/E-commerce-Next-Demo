'use client';
import * as React from 'react';
import CartProducts from './components/CartProducts';
import { Box, Grid } from '@mui/material';
import { connect } from 'react-redux';
import Link from 'next/link';
import CartPriceSection from './components/CartPriceSection';

const DataNotFound = (
  <Box component="div" sx={{ display: 'flex', height: '100vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h1>Data Not Found</h1>
    <Link href="/product-list" className="no-underline text-blue-700">
      Go To Product List Page
    </Link>
  </Box>
);

function Cart({ cartItems }: any) {
  return (
    <>
      {cartItems.length ? (
        <Grid container spacing={5}>
          <Grid item xs={8}>
            <h1>Product List</h1>
            <CartProducts />
          </Grid>
          <Grid item xs={4}>
            <h1>Price Section</h1>
            <CartPriceSection cartItems={cartItems} />
          </Grid>
        </Grid>
      ) : (
        DataNotFound
      )}
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cartItems: state.cart.data,
  };
};

export default connect(mapStateToProps, null)(Cart);
