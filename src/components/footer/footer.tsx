import Image from 'next/image'
import React from 'react'
import styles from './footer.module.css'

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
          alt='Logo Footer'
          src={'/assets/dogs-footer.svg'}
          width={28}
          height={22}
        />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}
