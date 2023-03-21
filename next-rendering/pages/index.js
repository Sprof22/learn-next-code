import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [pokeman, setPokeman] = useState([])
  useEffect(() => {
    async function getPokemon(){
      let res = await fetch ('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json')
      res = await res.json();
console.log(res);
       setPokeman([])
    }  
    getPokemon() 
  }, [])
  
  return (
    <>
      <Head>
        <title>The Pokeman List</title>
      </Head>
      <div>
        {JSON.stringify(pokeman)}
      </div>
        
    </>
  )
}
