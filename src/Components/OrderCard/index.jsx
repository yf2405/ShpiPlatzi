import React from 'react'
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid'



const OrderCart = props => {
    const {id, title, imgUrl, price,  handleDelete } = props
    let renderBoxXMarkIcon 
    if (handleDelete) {
      renderBoxXMarkIcon =  <ArchiveBoxXMarkIcon onClick={()=> handleDelete(id)}
      className="h-6 w-6 text-black-500 cursor-pointer"/>
    }
  return (
    <div className=' flex justify-between items-center mb-3' >
        <div className='flex items-center gap-2'>
            <figure className=' w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src={imgUrl} alt={title}/>
            </figure>
            <p className='text-sm font-light'>{title}</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='text-lg font-medium'>{price}</p>
         
          {renderBoxXMarkIcon}
        </div>
    </div>
  )
}

export default OrderCart