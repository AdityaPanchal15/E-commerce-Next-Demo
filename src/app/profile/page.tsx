'use client';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

export default function Profile() {
  const { data: session }: any = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin');
    },
  });

  return (
    <Card variant="outlined" sx={{ textAlign: 'center' }}>
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        width={200}
        height={200}
        src={session?.user?.image || ''}
        alt="green iguana"
        priority={true}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {session?.user?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {session?.user?.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
