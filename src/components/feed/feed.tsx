import React from 'react'
import FeedPhotos from './feed-photos'
import { Photo } from '@/actions/photos-get'

export default function Feed({ photos }: { photos: Photo[] }) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  )
}
