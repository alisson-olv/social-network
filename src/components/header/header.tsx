'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import { useUser } from '@/context/user-context'

export default function Header() {
  const { user } = useUser();
  console.log(user);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link className={styles.logo} href={'/'}>
          <Image
            alt='Home'
            src={'/assets/dogs.svg'}
            width={28}
            height={22}
            priority
          />
        </Link>
        {/* {userLogged ? (
          <Link className={styles.login} href={'/conta'}>
            {userLogged.username}
          </Link>
        ) : (
          <Link className={styles.login} href={'/login'}>
            Login/Criar
          </Link>
        )} */}
      </nav>
    </header>
  )
}
