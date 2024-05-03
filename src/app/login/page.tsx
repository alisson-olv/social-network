import LoginForm from '@/components/login/loginForm'
import React from 'react'

export default async function LoginPage() {
  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <LoginForm />
    </section>
  )
}