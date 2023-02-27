import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog Page</Link>
      <Link href="/product">Product Page</Link>
    </div>
  )
}

export default Home