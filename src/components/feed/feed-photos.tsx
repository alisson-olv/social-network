import { Photo } from '@/actions/photos-get'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './feed.module.css'

export default function FeedPhotos({ photos }: { photos: Photo[] }) {

  return (
    <div>
      <ul className={`${styles.feed} anime-left`}>
        {photos?.map((photo, i) => (
          <li className={styles.photo} key={photo.id + i}>
            <Link href={`/foto/${photo.id}`}>
              <Image
                src={photo.src}
                alt={photo.title}
                width={1500}
                height={1500}
                sizes='80vw'
              />
              <span className={styles.visualizacao}>{photo.acessos}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
