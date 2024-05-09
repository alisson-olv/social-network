import ContaPhotoPost from '@/components/conta/conta-photo-post';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Postar | Minha conta'
}

export default function PostarPage() {
  return (
    <ContaPhotoPost />
  )
}
