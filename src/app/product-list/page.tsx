import React from 'react';
import ProductCard from './components/ProductCard';
import { Grid } from '@mui/material';

export default async function ProductList() {
  const products = await getProducts();
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product: any, i: number) => {
          return (
            <Grid item xs={3} key={i}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export async function getProducts() {
  const res = await fetch('http://localhost:5000/products', { next: { revalidate: 60 } });
  const products = await res.json();

  return products;
}
