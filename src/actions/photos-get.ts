'use server';

export interface Photo {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
}

export interface PhotoItem {
  photo: {
    id: number;
    author: string;
    title: string;
    date: string;
    src: string;
    peso: string;
    idade: string;
    acessos: string;
    total_comments: string;
  };
}

export default async function photosGet() {
  const response = await fetch(
    'https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=0'
  );
  const data = (await response.json()) as Photo[];

  return data;
}

export async function photoGet(id: number) {
  const response = await fetch(
    `https://dogsapi.origamid.dev/json/api/photo/${id}`
  );
  const data = (await response.json()) as PhotoItem;

  return data;
}
