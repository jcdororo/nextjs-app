import getCurrentUser from '@/app/actions/getCurrentUser';
import getProducById from '@/app/actions/getProductById'
import EmptyState from '@/components/EmptyState';
import React from 'react'
import ProductClient from './ProductClient';

interface Params {
  productId?: string
}


const ProductPage = async ({ params } : {params: Params}) => {

  const product = await getProducById(params);
  const currentUser = await getCurrentUser();

  console.log('product@@@@@@@@@@@@@@',product)

  if(!product) {
    return (
      <EmptyState />
    )
  }

  return (
    <ProductClient 
      product={product}
      currentUser={currentUser}
    
    />
  )
}

export default ProductPage