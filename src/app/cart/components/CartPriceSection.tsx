import { Box, Button, Card, CardContent, Divider, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useMemo } from 'react';

export default function CartPriceSection({ cartItems }: any) {
  const totalAmount = useMemo(() => {
    return cartItems.reduce((total: number, item: any) => total + item.price, 0);
  }, [cartItems]);
  return (
    <Card variant="outlined" sx={{ mb: '10px' }}>
      <CardContent>
        <Box component="div" width="90%">
          {cartItems.map((item: any, i: number) => {
            return (
              <Typography variant="body1" component="div" display="flex" justifyContent="space-between" key={i}>
                <p>
                  {item.title} x {1}
                </p>
                <p>&#8377;{item.price}</p>
              </Typography>
            );
          })}
          <Divider />
          <Typography variant="body1" component="div" display="flex" justifyContent="space-between">
            <p>Total</p>
            <p>&#8377;{totalAmount}</p>
          </Typography>
          <Link href="checkout" className="no-underline text-white">
            <Button variant="contained" sx={{ borderRadius: '20px' }} fullWidth color="warning">
              Checkout
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}
