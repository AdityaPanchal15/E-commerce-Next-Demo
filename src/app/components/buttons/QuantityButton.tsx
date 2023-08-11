import { AddSharp, RemoveSharp } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import React from 'react';

export default function QuantityButton({ value, setValue }: any) {
  function quantityAdd() {
    if (value < 10) {
      setValue(value + 1);
    }
  }
  function quantityRemove() {
    if (value > 1) {
      setValue(value - 1);
    }
  }

  return (
    <div className="flex">
      <IconButton aria-label="Open in new tab" onClick={quantityRemove}>
        <RemoveSharp />
      </IconButton>
      <TextField id="outlined-basic" size="small" variant="outlined" disabled value={value} />
      <IconButton aria-label="Open in new tab" onClick={quantityAdd}>
        <AddSharp />
      </IconButton>
    </div>
  );
}
