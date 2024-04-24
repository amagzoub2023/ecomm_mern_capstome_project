import React, { useContext } from 'react'
//import React from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'

import Breadcrums from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
//import all_product from "../Components/Assets/all_product";


const Product = () => {
  //const { all_product } = useContext(ShopContext) || {}; // Provide empty object as default value

  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
