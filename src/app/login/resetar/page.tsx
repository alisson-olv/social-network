import LoginResetPassword from '@/components/login/login-form.resetar'
import React from 'react'

interface ResetarLoginPageProps {
  searchParams: {
    key: string,
    login: string,
  }
}

export default async function ResetarLoginPage({ searchParams }: ResetarLoginPageProps) {
  return (
    <section className='animeLeft'>
      <h1 className='title'>Resete a senha</h1>
      <LoginResetPassword keyToken={searchParams.key} login={searchParams.login} />
    </section>
  )
}
