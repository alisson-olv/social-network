import LoginLostPassword from '@/components/login/login-form-perdeu'
import React from 'react'

export default async function PerdeuLoginPage() {
  return (
    <main className='animeLeft'>
      <h1 className='title'>Perdeu a senha?</h1>
      <LoginLostPassword />
    </main>
  )
}
