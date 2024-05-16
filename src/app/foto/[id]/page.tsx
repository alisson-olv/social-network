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

import photoGet, { PhotoData } from '@/actions/photo-get';
import photosGet from '@/actions/photos-get';
import PhotoContent from '@/components/photo/photo-content';
import { notFound } from 'next/navigation';
import React from 'react';

export async function getStaticPaths() {
  // Fetch all photo IDs from your API
  const { data } = await photosGet();

  // Map photo IDs to params object required by Next.js dynamic routes
  if (!data) return null;
  const paths = data.map((photo) => ({
    params: { id: photo.id.toString() }
  }));

  return {
    paths,
    fallback: false // 404 for paths not generated at build time
  };
}

interface StaticProps {
  params: {
    id: string
  }
}

export async function getStaticProps({ params }: StaticProps) {
  const { id } = params;

  try {
    const { data } = await photoGet(id);

    if (!data) {
      return {
        notFound: true
      };
    }

    return {
      props: {
        data
      }
    };
  } catch (error) {
    console.error('Error fetching photo:', error);
    return {
      notFound: true
    };
  }
}

export default function FotoIdPage({ data }: { data: PhotoData }) {
  if (!data) return notFound();

  return (
    <section className='container mainContainer'>
      <PhotoContent data={data} single={true} />
    </section>
  );
}