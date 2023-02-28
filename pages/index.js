import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Home() {
  const router = useRouter()
  const handleClick = () => {
    console.log('yeep I have been clicked');
    router.push('/product')
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog Page</Link>
      <Link href="/product">Product Page</Link>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

export default Home