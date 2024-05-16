// import photoGet from '@/actions/photo-get';
// import photosGet from '@/actions/photos-get';
// import PhotoContent from '@/components/photo/photo-content';
// import { notFound } from 'next/navigation';
// import React from 'react';

// interface PhotoIdParams {
//   params: {
//     id: string;
//   }
// }

// export async function generateMetadata({ params }: PhotoIdParams) {
//   const { data } = await photoGet(params.id);

//   if (!data) return { title: 'Fotos' };
//   return {
//     title: `${data.photo.title} | ${(data.photo.author).charAt(0).toUpperCase()}${(data.photo.author).substring(1)}`,
//   }
// }

// export default async function FotoIdPage({ params }: PhotoIdParams) {
//   const { data } = await photoGet(params.id);

//   if (!data) return notFound();
//   return (
//     <section className='container mainContainer'>
//       <PhotoContent data={data} single={true} />
//     </section>
//   )
// }
'use client'
import React, { useState, useEffect } from 'react';
import PhotoContent from '@/components/photo/photo-content'; // Assuming correct path
import photoGet from '@/actions/photo-get'; // Assuming correct path
import { notFound } from 'next/navigation';
import Loading from '@/components/helper/loading/loading';

interface PhotoIdParams {
  params: {
    id: string;
  };
}

export default function FotoIdPage({ params }: PhotoIdParams) {
  const [data, setData] = useState<any>(null); // Store fetched data

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await photoGet(params.id);
      if (data) {
        setData(data);
      } else {
        // Handle 404 or display a placeholder
      }
    };

    fetchData();
  }, [params.id]); // Re-fetch on params change

  if (!data) return <Loading />; // Or a placeholder

  return (
    <section className='container mainContainer'>
      <PhotoContent data={data} single={true} />
    </section>
  );
}