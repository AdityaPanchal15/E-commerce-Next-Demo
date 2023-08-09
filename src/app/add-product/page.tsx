'use client';
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { addProduct } from '../redux/products/actions';
import { connect } from 'react-redux';

function AddProduct(props: any) {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.addProduct({ title, name, description, imageUrl, date });
    router.push('/product-list');
  }

  return (
    <>
      <Typography variant="h4" component="h4" sx={{ m: 1 }}>
        Add Product
      </Typography>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField required fullWidth label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField required fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField required fullWidth label="Image Url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <TextField required fullWidth label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <TextField required type="date" fullWidth value={date} onChange={(e) => setDate(e.target.value)} />
        <Button variant="contained" sx={{ m: 1 }} type="submit">
          Add Product
        </Button>
      </Box>
    </>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addProduct: (payload: any) => dispatch(addProduct(payload)),
  };
};

export default connect(null, mapDispatchToProps)(AddProduct);
