'use client'
import React, { useEffect, useState } from 'react'
import Input from '../form/input'
import Button from '../form/button'
import passwordLost from '@/actions/password-lost'
import { useFormState, useFormStatus } from 'react-dom'
import ErrorMessage from '../helper/error-message'

function ButtonForm() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled label='Resetando...' />
      ) : (
        <Button label='Resetar' />
      )}
    </>
  )
}

export default function LoginLostPassword() {
  const [url, setUrl] = useState('');
  const [state, action] = useFormState(passwordLost, {
    data: null,
    error: '',
    ok: false,
  })

  useEffect(() => {
    const urlPage = window.location.href.replace('perdeu', 'resetar');
    setUrl(urlPage);
  }, []);

  return (
    <form action={action}>

      {state.ok ? (
        <p style={{ color: '#4c1' }}>Email enviado</p>
      ) : (
        <>
          <Input type='text' name='login' label='Email / Usuário' />
          <input type="hidden" name='url' value={url} />
          <ErrorMessage error={state.error} />
          <ButtonForm />
        </>
      )}
    </form>
  )
}
