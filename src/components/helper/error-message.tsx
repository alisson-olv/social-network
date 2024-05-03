import React from 'react'

interface ErrorMessageProps {
  error: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  if (error === '') return null;
  return <p style={{ color: '#f31', margin: '1rem 0' }}>{error}</p>;
}
