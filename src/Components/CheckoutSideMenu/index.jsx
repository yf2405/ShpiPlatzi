import React from 'react'
import {Link} from 'react-router-dom'
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid'
import { shoppingCartContext} from '../../Context'
import { useContext } from 'react'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../Utils'
export const CheckoutSideMenu = () => {
    const context = useContext(shoppingCartContext)

    const handleDelete = (id) => {
        const filterProducts = context.cartProducts.filter(product => product.id !=id)
        context.setCartProducts(filterProducts);
    };
    
    const handleCheckout = () => {

      const currentDate = new Date()
      const formateDate = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`
      const orderToAdd = {
        date: formateDate,
        products: context.cartProducts,
        totalProducts: context.cartProducts.length,
        totalPrice: totalPrice(context.cartProducts)
      }
      context.setOrder([...context.order, orderToAdd])
      context.setCartProducts([])
      context.setSearchByTitle(null)

      
    }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex': 'hidden'} flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-4`}>
    <div className='flex justify-between items-center p-6 '>
     <h2 className='font-medium text-xl'>My order</h2>
     <div onClick={() => context.closeCheckoutSideMenu()}>   <ArchiveBoxXMarkIcon  className="h-6 w-6 text-black-500 cursor-pointer" /></div>
    </div>
   <div className='px-6 overflow-y-scroll flex-1 '>
   {
     context.cartProducts.map(product => (
        <OrderCard 
        key={product.id}
        id={product.id}
         title={product.title}
         imgUrl={product.images}
        price={product.price}
        handleDelete={handleDelete} 
        
        />

     ))
    }
   </div>
   <div className='px-6 mb-6'>
    <p className='flex justify-between items-center mb-2'>
      <span className='font-light'>
        total:
      </span>
      <span className='font-medium text-2xl'>
       ${totalPrice(context.cartProducts)}
      </span>
    </p> 
    <Link to='/My-order/last'>
           <button className='bg-black py-3 text-white w-full rounded-lg'
            onClick= {() => handleCheckout()}>checkout</button>
    </Link>
    </div>
    </aside>
  )
}
