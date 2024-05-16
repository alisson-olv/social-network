import photoGet from '@/actions/photo-get';
import photosGet from '@/actions/photos-get';
import PhotoContent from '@/components/photo/photo-content';
import { notFound } from 'next/navigation';
import React from 'react';

interface PhotoIdParams {
  params: {
    id: string;
  }
}

export async function generateMetadata({ params }: PhotoIdParams) {
  const { data } = await photoGet(params.id);

  if (!data) return { title: 'Fotos' };
  return {
    title: `${data.photo.title} | ${(data.photo.author).charAt(0).toUpperCase()}${(data.photo.author).substring(1)}`,
  }
}

export async function generateStaticParams() {
  const { data } = await photosGet();
  return data?.map((photo) => ({
    id: String(photo.id),
  }));
}

export default async function FotoIdPage({ params }: PhotoIdParams) {
  const { data } = await photoGet(params.id);

  if (!data) return notFound();
  return (
    <section className='container mainContainer'>
      <PhotoContent data={data} single={true} />
    </section>
  )
}
