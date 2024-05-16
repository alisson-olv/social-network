import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <section className='container mainContainer animeLeft'>
      <h1 className='title'>Página não encontrada</h1>
      <Link href={'/'} className='button' style={{ marginTop: '1rem', display: 'inline-block', textAlign: 'center' }}>Volte para a Home</Link>
    </section>
  )
}
