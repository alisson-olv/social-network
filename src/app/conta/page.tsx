import photosGet from '@/actions/photos-get'
import { userGet } from '@/actions/user-get'
import Feed from '@/components/feed/feed'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Minha conta'
}

export default async function ContaPage() {
  const { data: user } = await userGet();
  const { data } = await photosGet({ user: user?.username })

  return (
    <section>
      {data?.length ? (
        <Feed photos={data} user={user?.username} />
      ) : (
        <div>
          <p style={{ paddingBottom: '10px' }}>Nenhuma foto encontrada.</p>
          <Link href={'/conta/postar'} className='button' style={{ display: 'inline-block', textAlign: 'center' }}>Postar foto</Link>
        </div>
      )}
    </section>
  )
}
