import React, { ComponentProps } from 'react'
import styles from './button.module.css'

interface ButtonProps extends ComponentProps<'button'> {
  label: string;
}

export default function Button({ label, ...props }: ButtonProps) {
  return (
    <button className={styles.button} {...props}>{label}</button>
  )
}
