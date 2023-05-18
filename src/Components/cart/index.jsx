
import { useContext } from 'react'
import { PlusIcon, CheckIcon} from '@heroicons/react/24/solid'
import {shoppingCartContext} from '../../Context'
const Cart = (data) => {
    const context = useContext(shoppingCartContext)

    const showProducts = (ProductDetail) =>{
      context.openProductDetails()
      context.closeCheckoutSideMenu()
      context.setProductToShow(ProductDetail)
    }

    const addProductToCart = (e, ProductData) =>{
      e.stopPropagation()
      context.setCount(context.Count + 1)
        context.setCartProducts([...context.cartProducts, ProductData])
        context.openCheckoutSideMenu()
        context.closeProductDetails()
    }
        
        const renderIcon =(id)=>{
          const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
          if (isInCart){
            return (
              <div className='absolute m-0.5 p-0.5 top-0 right-0 flex justify-center items-center bg-black  w-6 h-6 rounded-full'>
                    <CheckIcon  className="h-6 w-6 text-black-500 cursor-pointer text-white" />
                </div>
                )
          }else{
          return(
            <div className='absolute m-0.5 p-0.5 top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full'
            onClick={(e)=> addProductToCart(e, data.data)}>
                  <PlusIcon  className="h-6 w-6 text-black-500 cursor-pointer" />
              </div>
          )
        }
    }

  return (
    <div className='bg-white cursor-pointer w-56 h-60 shadow-md' 
      onClick={() => showProducts(data.data)}>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sx m-2 p-1' >{data.data.category.name}</span>
                <img className='w-full h-full object-cover' src={data.data.images[0]} alt={data.data.title} />
              { renderIcon(data.data.id)}
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>{data.data.title}</span>
            <span className='text-lg font-medium'>{data.data.price}</span>
        </p>
        
    </div>
  )
}

export default Cart;