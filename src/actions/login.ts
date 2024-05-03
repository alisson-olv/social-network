'use server';

import { TOKEN_POST } from '@/functions/api';
import ApiError from '@/functions/api-error';
import { cookies } from 'next/headers';

export default async function Login(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!username || !password) throw new Error('Preencha os dados');
    const { url } = TOKEN_POST();
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Usuário ou senha errado!');
    const data = await response.json();
    cookies().set('token', data.token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24,
    });

    return { data: null, error: '', ok: true };
  } catch (error) {
    return ApiError(error);
  }
}
