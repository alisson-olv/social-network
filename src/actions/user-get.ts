'use server';

import { USER_GET } from '@/functions/api';
import ApiError from '@/functions/api-error';
import { cookies } from 'next/headers';

export interface User {
  id: number;
  email: string;
  username: string;
  nome: string;
}

export async function userGet() {
  try {
    const token = cookies().get('token')?.value;
    if (!token) throw new Error('Token não encontrado.');
    const { url } = USER_GET();

    const response = await fetch(url, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) throw new Error('Erro ao encontrar o usuário.');

    const data = (await response.json()) as User;
    return { data: data, error: '', ok: true };
  } catch (error: unknown) {
    return ApiError(error);
  }
}
