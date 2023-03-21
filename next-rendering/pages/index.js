import Head from 'next/head'
import { Inter } from '@next/font/google'
import styled from "styled-components";
import { useEffect, useState } from 'react'
import Link from 'next/link'

export const PokemonCard = styled.div`
img {
  max-height: 200px;
}

h3{
  color: green
}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  margin: auto;
  max-width: 1440px;
  justify-content: space-between;

`

export default function Home() {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    async function getPokemon(){
      const res = await fetch ('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json')
      
       setPokemon(await res.json())
    }   

    getPokemon() 
  }, [])
  
  return (
    <div style={{background: '#fff'}}>
      <Head>
        <title>The Pokemon List</title>
      </Head>
      <div>
      <Grid>

      {pokemon.map((pokemon) => (
        <PokemonCard>
          <Link href={`/pokemon/${pokemon.id}`} >
            <img src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`} alt='' />
            <h3>{pokemon.name}</h3>
          </Link>
        </PokemonCard>
      ))}
      </Grid>
      </div>
        
    </div>
  )
}
