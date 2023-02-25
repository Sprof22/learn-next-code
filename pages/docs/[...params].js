import { useRouter } from 'next/router'
import React from 'react'

const Docs = () => {

  const router = useRouter();
  const {params = []} =  router.query;
  console.log(params, 'this is good');

  if (params.length === 2) {
    return (
      <h1> Viewing Docs for feature {params[0]} and concept {params[1]} </h1>
    )
  } else if (params.length === 1) {
    return (
      <h1> Viewing docs for feature {params[1]}</h1>
    )
  }
  return (
    <div>Docs for this</div>
  )
}

export default Docs