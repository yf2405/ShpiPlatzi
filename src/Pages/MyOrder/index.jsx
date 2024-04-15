import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import {ChevronLeftIcon } from '@heroicons/react/24/solid'
import {shoppingCartContext} from '../../Context'
import { useContext } from 'react'
import OrderCart from '../../Components/OrderCard'
    
  
export default function MyOrder() {
  const context = useContext(shoppingCartContext)
 const currentPath = window.location.pathname
 let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
if (index === 'last') index = context.order?.length -1
  

 
  return (
         <Layout>
 
          
      <div className='flex relative w-80 items-center justify-center mb-8 '>
        <Link to = '/my-Orders' className='absolute left-0 '>
       <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' /> 
       </Link>
       <h1>My Orders</h1>
        
      </div>
      <div className='flex flex-col w-80 p-6' >


    {
      context.order?.[index]?.products.map(product => (
         <OrderCart
         key={product.id}
         id={product.id}
          title={product.title}
          imgUrl={product.images}
         price={product.price}
        
         
         />
 
      ))
     }
    </div>
    </Layout>
  )
}
