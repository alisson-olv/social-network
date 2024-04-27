import React from 'react'

interface ParamsProps {
  params: {
    user: string;
  }
}

export async function generateStaticParams() {
  return { user: 'teste' }
}

export default async function UserPage({ params }: ParamsProps) {
  return (
    <main>UserPage: {params.user}</main>
  )
}
