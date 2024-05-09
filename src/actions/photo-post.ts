'use server';

import { PHOTO_POST } from '@/functions/api';
import ApiError from '@/functions/api-error';
import { revalidatePath, revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function photoPost(state: {}, formData: FormData) {
  const token = cookies().get('token')?.value;
  const nome = formData.get('nome') as string | null;
  const peso = formData.get('peso') as string | null;
  const idade = formData.get('idade') as string | null;
  const img = formData.get('img') as File;

  try {
    if (!token || !nome || !idade || !peso || img.size === 0) {
      throw new Error('Preencha todos os campos');
    }
    const { url } = PHOTO_POST();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    });

    if (!response.ok) throw new Error('Erro ao enviar a imagem');
  } catch (error: unknown) {
    return ApiError(error);
  }

  revalidateTag('photos');
  redirect('/');
}
