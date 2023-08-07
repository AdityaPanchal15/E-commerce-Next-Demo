'use client';
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { FormEvent, useState } from 'react';

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch('http://localhost:5000/products', {
      method: 'POST',
      body: JSON.stringify({ title, name, description, imageUrl, date }) as any,
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
        <TextField required id="outlined-required" fullWidth label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField required id="outlined-required" fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField required id="outlined-required" fullWidth label="Image Url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <TextField
          required
          id="outlined-required"
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField required id="outlined-required" type="date" fullWidth value={date} onChange={(e) => setDate(e.target.value)} />
        <Button variant="contained" sx={{ m: 1 }} type="submit">
          Add Product
        </Button>
      </Box>
    </>
  );
}
