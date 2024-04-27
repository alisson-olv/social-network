'use server';

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

export default async function photoGet(id: string) {
  const response = await fetch(
    `https://dogsapi.origamid.dev/json/api/photo/${id}`
  );
  const data = (await response.json()) as PhotoItem;

  return data;
}
