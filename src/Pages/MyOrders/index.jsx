import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'

import { shoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
  const context = useContext(shoppingCartContext)
  
 const go = () => {if (!context.order.length) {
    return ( 'Yet Not Orders' )
    }
   }
  

  return (
    <Layout>


      <div className='flex items-center justify-center relative w-80 p-4'>
        <h1>MY Orders</h1>
      </div>
      
      <h2>{go()}</h2>
      
      {
        
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
             id={order.id}  
             date={order.date}
              totalPrice={order.totalPrice}// totalPrice biene de orderCard // totalProducts biene de orderCard
              totalProducts={order.totalProducts} /> 
          </Link>
          
        ))
        }
    </Layout>
  )
}

export default MyOrders