import Link from 'next/link'
import React from 'react'

const ProductList = ({productID = 100}) => {
  return (
    <div>
    <Link href={'/'}>Go Home</Link>
        <Link href='/product/1'><h2>Product 1</h2></Link>
        <Link href='/product/2'>Product 2</Link>
        <Link href='/product/3' replace>Product 3</Link>
        <Link href={`/product/${productID}`}>Product {productID}</Link>
        
    </div>
  )
}

export default ProductList