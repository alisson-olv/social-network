'use server';
import { PASSWORD_RESET } from '@/functions/api';
import ApiError from '@/functions/api-error';
import { redirect } from 'next/navigation';

interface StateProps {
  data: null;
  error: string;
  ok: boolean;
}

export default async function PasswordReset(
  state: StateProps,
  formData: FormData
) {
  const login = formData.get('login') as string | null;
  const key = formData.get('key') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!password) throw new Error('Preencha a nova senha');

    if ((login !== '' && key == '') || (login == '' && key !== '')) {
      throw new Error(
        'Você não possui token para resetar a senha, use o link que foi enviado ao seu email.'
      );
    }

    const { url } = PASSWORD_RESET();

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Link expirado, resete a senha novamente.');
    }

    return { data: null, error: '', ok: true };
  } catch (error: unknown) {
    return ApiError(error);
  } finally {
    if (state.ok) redirect('/login');
  }
}
