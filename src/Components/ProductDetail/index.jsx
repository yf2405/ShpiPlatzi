import React from 'react'
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid'
import { shoppingCartContext} from '../../Context'
import { useContext } from 'react'

export const ProductDetail = () => {
    const context = useContext(shoppingCartContext)
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex': 'hidden'} flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-4`}>
    <div className='flex justify-between items-center p-6'>
     <h2 className='font-medium text-xl'>Detail</h2>
     <div onClick={() => context.closeProductDetails()}>   <ArchiveBoxXMarkIcon  className="h-6 w-6 text-black-500 cursor-pointer" /></div>
    </div>
    <figure className='px-6'>
        <img className='w-full h-full rounded-lg' src={context.productToShow.images} alt={context.productToShow.name} />
    </figure>
    <p className='flex flex-col p-6 m-0.5'>
        <span className='font-medium text-2xl mb-2'> Price: ${context.productToShow.price}</span>
        <span className='font-medium text-md mb-0.5'> Title: {context.productToShow.name}</span>
        <span className='font-medium text-sm mb-0.5'>Description: {context.productToShow.description}</span>
    </p>
    </aside>
  )
}
