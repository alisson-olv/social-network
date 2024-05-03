import React, { ReactNode } from 'react'
import styles from './login.module.css'

export default function LoginPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.login}>
      <div className={styles.forms}>
        {children}
      </div>
    </div>
  )
}
