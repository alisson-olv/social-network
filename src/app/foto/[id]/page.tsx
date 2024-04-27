import React from 'react'

interface ParamsProps {
  params: {
    id: number;
  }
}

export default async function FotoIdPage({ params }: ParamsProps) {

  return (
    <main>{params.id}</main>
  )
}
