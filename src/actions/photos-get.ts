'use server';

import { PHOTOS_GET } from '@/functions/api';
import ApiError from '@/functions/api-error';

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

interface PhotosGetParams {
  page?: number;
  total?: number;
  user?: 0 | string;
}

export default async function photosGet(
  { page = 1, total = 6, user = 0 }: PhotosGetParams = {},
  optionsFront?: RequestInit
) {
  try {
    const options = optionsFront || {
      next: {
        revalidate: 10,
        tags: ['photos'],
      },
    };
    const { url } = PHOTOS_GET({ page, total, user });
    const response = await fetch(url, options);

    if (!response.ok) throw new Error('Erro ao carregar as fotos');
    const data = (await response.json()) as Photo[];

    return { data: data, ok: true, error: '' };
  } catch (error: unknown) {
    return ApiError(error);
  }
}
