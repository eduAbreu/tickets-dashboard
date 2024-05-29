'use client'

import React from 'react'
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter();
  return (
    <Link href="/tickets" className="button btn-secondary" onClick={() => router.back()}>Back</Link>
  )
}
