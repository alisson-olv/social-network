import photoGet, { PhotoItem } from '@/actions/photo-get';
import photosGet from '@/actions/photos-get';
import Image from 'next/image';
import React from 'react'

interface ParamsProps {
  params: {
    id: string;
  }
}

export async function generateStaticParams() {
  const { data } = await photosGet();
  return data?.map((photo) => ({
    id: `${photo.id}`,
  }));
}

export default async function FotoIdPage({ params }: ParamsProps) {
  const data = await photoGet(params.id) as PhotoItem;

  return (
    <section>
      {params.id}
      <Image
        src={data?.photo.src}
        alt={data?.photo.title}
        width={1500}
        height={1500}
        sizes='80vw'
      />
    </section>
  )
}
