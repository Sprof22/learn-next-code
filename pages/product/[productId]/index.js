import React from 'react'
import { useRouter } from 'next/router'

const ProductDetails = () => {
    const router = useRouter();
    const ProductId = router.query.productId
  return (
    <div>
      <div>ProductDetails for {ProductId}</div>
    </div>
  )
}

export default ProductDetails