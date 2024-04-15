import React from 'react'
import './LoadingPage.css'
import { shoppingCartContext} from '../../Context'
import { useContext } from 'react'



export const LoadingPages = () => {
const context = useContext(shoppingCartContext)
     context.loading ? (
        <div className='LoadingPage'>
          <span />
        </div>
      ) : null
    };