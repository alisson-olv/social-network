import photosGet from '@/actions/photos-get';
import Image from 'next/image';
import React from 'react'

interface ParamsProps {
  params: {
    id: number;
  }
}

export async function generateStaticParams() {
  const data = await photosGet();
  return data.map((photo) => [({
    id: photo.id,
  })]);
}

export default async function FotoIdPage({ params }: ParamsProps) {
  const data = await photosGet();

  console.log(await generateStaticParams);


  return (
    <section>
      {data?.map((photo) => (
        <div key={photo.id}>
          <Image
            src={photo.src}
            alt={photo.title}
            width={1500}
            height={1500}
            sizes='80vw'
          />
        </div>
      ))}
    </section>
  )
}
