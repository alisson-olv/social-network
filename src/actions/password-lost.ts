'use server';
import { PASSWORD_LOST } from '@/functions/api';
import ApiError from '@/functions/api-error';

export default async function PasswordLost(state: {}, formData: FormData) {
  const login = formData.get('login') as string | null;
  const urlPage = formData.get('url') as string | null;

  try {
    if (!login) throw new Error('Preencha os dados');
    const { url } = PASSWORD_LOST();
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        login,
        url: urlPage,
      }),
    });

    if (!response.ok) throw new Error('Email nao cadastrado/encontrado.');
    return { data: null, error: '', ok: true };
  } catch (error: unknown) {
    return ApiError(error);
  }
}
