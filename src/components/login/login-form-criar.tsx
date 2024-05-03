'use client'
import React from 'react'
import Input from '../form/input'
import Button from '../form/button'
import userPost from '@/actions/user-post'
import { useFormState, useFormStatus } from 'react-dom'
import ErrorMessage from '../helper/error-message'

function ButtonForm() {
  const { pending } = useFormStatus();

  return <>
    {pending ? (
      <Button disabled label='Cadastrando..' />
    ) : (
      <Button label='Cadastrar' />
    )}
  </>

}

export default function LoginCriar() {
  const [state, action] = useFormState(userPost, {
    data: null,
    error: '',
    ok: false,
  })

  return (
    <form action={action}>
      <Input type='text' label='Usuário' name='username' />
      <Input type='text' label='Email' name='email' />
      <Input type='password' label='Senha' name='password' />
      <ErrorMessage error={state.error} />
      <ButtonForm />
    </form>
  )
}
