import React from 'react';
import BaseTable from '../components/BaseTable';

export default async function Products() {
  async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
  }

  const rows = await getData();
  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'username',
      numeric: true,
      disablePadding: false,
      label: 'Username',
    },
    {
      id: 'email',
      numeric: true,
      disablePadding: false,
      label: 'Email',
    },
    {
      id: 'phone',
      numeric: true,
      disablePadding: false,
      label: 'Phone',
    },
    {
      id: 'website',
      numeric: true,
      disablePadding: false,
      label: 'Website',
    },
  ];

  return <BaseTable headCells={headCells} rows={rows} />;
}
