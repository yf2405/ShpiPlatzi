
import { useContext} from 'react'
import Layout from '../../Components/Layout'
import { shoppingCartContext } from '../../Context'
import Cart from '../../Components/cart'
import { ProductDetail } from '../../Components/ProductDetail'



export default function Home() {
const context = useContext(shoppingCartContext)
   
const renderView = () =>{ 
  if (context.filteredItems?.length > 0) {
    return (
      context.filteredItems?.map(item => (
        <Cart key={item.id} data={item} />
      ))
    )
  } else {
    return (
      <div>We don't have anything :(</div>
    )
  }
}


  return (
    <Layout>
      Home
  
    <input type='text' placeholder='Search a product'
     className=' rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
     onChange={(event)=> context.setSearchByTitle(event.target.value)}/>
     <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
    {
      renderView()
      }
    </div>
    <ProductDetail/>
    </Layout>
  )}
    
