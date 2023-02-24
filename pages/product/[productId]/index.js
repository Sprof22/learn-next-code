import React from 'react'
import { useRouter } from 'next/router'

const ProductDetails = () => {
    const router = useRouter();
    const ProductId = router.query.productId
  return (
    <div>ProductDetails for {ProductId}</div>
  )
}

export default ProductDetails