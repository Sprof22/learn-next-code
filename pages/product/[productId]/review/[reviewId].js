import { useRouter } from 'next/router'
import React from 'react'

const ReviewNumber = () => {
    const router = useRouter();
    const {productId, reviewId} = router.query
    console.log(router, "this is the router")
  return (
    <div>This is the {reviewId} for {productId}</div>
  )
}

export default ReviewNumber