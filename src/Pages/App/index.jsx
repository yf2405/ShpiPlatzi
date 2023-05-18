import { useRoutes,  BrowserRouter} from 'react-router-dom';
import {ShoppingCartProvider } from '../../Context'
import Home from '../Home';
import MyAccount from '../MyAccount';
import NotFound from '../NotFound';
import MyOrder from '../MyOrder';
import Signin from '../Signin';
import MyOrders from '../MyOrders';
import Navbar from '../../Components/Navbar';
import './App.css';
import { LoadingPages } from '../../Components/LoadingPage';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';



const AppRoutes = () =>{
  let routes = useRoutes([
{ path:'/',element:  <Home/>},
{ path:'/clothes',element:  <Home/>},
{ path:'/Electronics',element:  <Home/>},
{ path:'/furnitures',element:  <Home/>},
{ path:'/Toys',element:  <Home/>},
{ path:'/others',element:  <Home/>},
{ path:'/My-account',element:  <MyAccount/>},
{ path:'/My-order',element:  <MyOrder/>},
{ path:'/Sig-nin',element:  <Signin/>},
{ path:'/My-orders',element:  <MyOrders/>},
{ path:'/My-order/last',element:  <MyOrder/>},
{ path:'/My-orders/:id',element:  <MyOrder/>},

{ path:'/*',element:  <NotFound/>},
])

  return routes
}


 const App = () => {

  return (
    <ShoppingCartProvider >
        <BrowserRouter>
       
   <AppRoutes/>
   <Navbar/> 
   
    <CheckoutSideMenu/>
   
  </BrowserRouter>

    </ShoppingCartProvider>

  )
}

export default App