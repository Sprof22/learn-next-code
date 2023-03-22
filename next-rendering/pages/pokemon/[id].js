import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export default function Details( {pokemon}) {
  const router = useRouter();
  const { id } = router.query;


  if (!pokemon) {
    return null;
  }
  return (
    <div>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <div>
        <Link href="/">Back to Home</Link>
      </div>
      <div>
        <div>
          <img
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt={pokemon.name.english}
          />
        </div>
        <div>
            <div>{pokemon.name}</div>
            <div>{pokemon.type.join(" ,")}</div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon.stats.map(({name, value}) => (
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({params}) {

    const res = await fetch(
        `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`
      );
    return {
      props: {
        pokemon: await res.json() 
      }, // will be passed to the page component as props
    }
  }

  