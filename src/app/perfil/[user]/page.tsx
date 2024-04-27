import React from 'react'

interface ParamsProps {
  params: {
    user: string;
  }
}

export default async function UserPage({ params }: ParamsProps) {
  return (
    <main>UserPage: {params.user}</main>
  )
}
