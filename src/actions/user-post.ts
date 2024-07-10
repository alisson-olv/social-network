'use server';

import { USER_POST } from '@/functions/api';
import ApiError from '@/functions/api-error';
import login from './login';

export default async function userPost(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null;
  const email = formData.get('email') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!username || !email || !password)
      throw new Error('Preencha todos os campos');
    const { url } = USER_POST();

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Email já utilizado.');

    if (response.ok) {
      await login(state, formData);
    }

    return { data: null, error: '', ok: true };
  } catch (error: unknown) {
    return ApiError(error);
  }
}
