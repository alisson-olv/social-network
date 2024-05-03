'use client'
import React from 'react'
import Input from '../form/input'
import Button from '../form/button'
import PasswordLost from '@/actions/password-lost'
import { useFormState } from 'react-dom'

export default function LoginLostPassword() {
  const [state, action] = useFormState(PasswordLost, {
    data: null,
    error: '',
    ok: false,
  })

  return (
    <form action={action}>
      <Input type='text' name='login' label='Email / Usuário' />
      <Button label='Enviar email' />
    </form>
  )
}
