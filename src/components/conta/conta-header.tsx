'use client'
import React, { useEffect, useState } from 'react';
import MinhasFotosIcon from '@/icons/feed-icon';
import EstatisticasIcon from '@/icons/estatisticas-icon';
import AdicionarFotoIcon from '@/icons/adicionar-icon';
import SairIcon from '@/icons/sair-icon';
import styles from './conta-header.module.css';
import useMedia from '@/hooks/use-media';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import logout from '@/actions/logout';
import { useUser } from '@/context/user-context';

function getTitle(pathname: string) {
  switch (pathname) {
    case '/conta/postar':
      return 'Poste sua foto';
    case '/conta/estatisticas':
      return 'Estatísticas';
    default:
      return 'Minha conta';
  }
}

export default function ContaHeader() {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { setUserLogged } = useUser();

  const pathname = usePathname();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  async function handleLogout() {
    await logout();
    setUserLogged(null);
  }

  return (
    <header className={styles.header}>
      <h1 className='title'>{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive
            }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive
          }`}
      >
        <Link href="/conta" className={pathname === '/conta' ? 'active' : ''}>
          <MinhasFotosIcon />
          {mobile && 'Minhas Fotos'}
        </Link>
        <Link href="/conta/estatisticas" className={pathname === '/conta/estatisticas' ? 'active' : ''}>
          <EstatisticasIcon />
          {mobile && 'Estatísticas'}
        </Link>
        <Link href="/conta/postar" className={pathname === '/conta/postar' ? 'active' : ''}>
          <AdicionarFotoIcon />
          {mobile && 'Adicionar Foto'}
        </Link>
        <button onClick={handleLogout}>
          <SairIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </header>
  );
};
