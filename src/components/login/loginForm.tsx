'use client'
import React, { useEffect } from 'react'
import Input from '../form/input'
import Button from '../form/button'
import { useFormState } from 'react-dom'
import Login from '@/actions/login'
import ErrorMessage from '../helper/error-message'

export default function LoginForm() {
  const [state, action] = useFormState(Login, {
    ok: false,
    data: null,
    error: '',
  })

  useEffect(() => {
    if (state.ok) {
      window.location.href = '/';
    }
  }, [state])

  return (
    <form action={action}>
      <Input label='Usuário' name='username' type='text' />
      <Input label='Senha' name='password' type='password' />
      <ErrorMessage error={state.error} />
      <Button label='Entrar' />
    </form>
  )
}
