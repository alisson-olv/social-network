import LoginCriar from '@/components/login/login-form-criar'
import React from 'react'

export default async function CriarLoginPage() {
  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <LoginCriar />
    </section>
  )
}
