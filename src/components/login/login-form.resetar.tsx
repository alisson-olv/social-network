'use client'
import PasswordReset from '@/actions/password-reset';
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import Input from '../form/input';
import Button from '../form/button';
import ErrorMessage from '../helper/error-message';

function ButtonForm() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled label='Resetando..' />
      ) : (
        <Button label='Resetar' />
      )}
    </>
  )
}

interface LoginResetPasswordProps {
  keyToken: string;
  login: string;
}

export default function LoginResetPassword({ keyToken, login }: LoginResetPasswordProps) {
  const [state, action] = useFormState(PasswordReset, {
    data: null,
    error: '',
    ok: false,
  });

  return (
    <form action={action}>
      <Input type='password' name='password' label='Nova senha' />
      <input type="hidden" name='key' value={keyToken} />
      <input type="hidden" name='login' value={login} />
      <ErrorMessage error={state.error} />
      <ButtonForm />
    </form>
  )
}
