'use client'
import React, { useEffect } from 'react'
import Input from '../form/input'
import Button from '../form/button'
import { useFormState, useFormStatus } from 'react-dom'
import login from '@/actions/login'
import ErrorMessage from '../helper/error-message'
import styles from './login-form.module.css'
import Link from 'next/link'

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={true} label='Entrando..' />
      ) : (
        <Button label='Entrar' />
      )}
    </>
  )
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
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
    <>
      <form action={action} className={styles.form}>
        <Input label='Usuário' name='username' type='text' />
        <Input label='Senha' name='password' type='password' />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <Link className={styles.perdeu} href="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button" href="/login/criar">
          Cadastro
        </Link>
      </div>
    </>
  )
}
