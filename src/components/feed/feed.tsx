import React from 'react'
import FeedPhotos from './feed-photos'
import { Photo } from '@/actions/photos-get'

export default function Feed({ photos }: { photos: Photo[] }) {
  return (
    <main className='animeLeft'>
      <FeedPhotos photos={photos} />
    </main>
  )
}
