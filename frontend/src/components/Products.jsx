import React from 'react';
import { ApiTopProduct } from '../api/TopProductApi.jsx';
import Product from './Product.jsx';

const Products = () => {
  return <div className='p-5 flex flex-wrap'>
      {
          ApiTopProduct.map((product, index)=>(
              <Product item={product} key={index}/>
          ))
      }
  </div>;
};

export default Products;