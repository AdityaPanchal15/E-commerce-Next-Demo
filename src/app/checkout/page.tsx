'use client';

import React, { useEffect } from 'react';
import CartProducts from '../cart/components/CartProducts';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
import { useStripeCheckout } from '../utils/useStripeCheckout';

export default function Checkout() {
  const router = useRouter();
  const cartItems = useSelector((state: any) => state.cart.data);

  const handlePayment = async () => {
    const session = await useStripeCheckout(cartItems);
    window.location.href = session.url || '';
  };

  useEffect(() => {
    if (!cartItems.length) {
      router.push('/product-list');
    }
  }, []);
  return (
    <>
      <CartProducts />
      <Button onClick={handlePayment} variant="contained" color="warning" fullWidth sx={{ borderRadius: '20px' }}>
        Pay Now
      </Button>
    </>
  );
}
