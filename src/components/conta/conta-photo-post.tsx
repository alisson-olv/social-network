'use client'
import React, { ChangeEvent, useActionState, useState } from 'react'
import Input from '../form/input'
import styles from './conta-photo-post.module.css'
import { useFormState, useFormStatus } from 'react-dom'
import Button from '../form/button';
import photoPost from '@/actions/photo-post'
import ErrorMessage from '../helper/error-message'
import { error } from 'console'

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled label='Enviando..' />
      ) : (
        <Button label='Enviar' />
      )}
    </>
  )
}

export default function ContaPhotoPost() {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: '',
    data: null,
  })

  const [img, setImg] = useState('');

  function handleImageChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]))
    }
  }

  return (
    <div className={`${styles.photoPost} animeLeft`}>
      <form action={action}>
        <Input label='Nome' name='nome' id='nome' type='text' />
        <Input label='Peso' name='peso' id='peso' type='number' />
        <Input label='Idade' name='idade' id='idade' type='number' />
        <input name="img" id="img" type="file" className={styles.file} onChange={handleImageChange} />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      {state.ok && 'ok'}
      <div>
        <div className={styles.preview} style={{ backgroundImage: `url(${img})` }}></div>
      </div>
    </div>
  )
}
