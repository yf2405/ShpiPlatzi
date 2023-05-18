import { createContext, useState, useEffect } from "react";

export const shoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    //quantity
    const [Count, setCount] = useState(0)
    //product details open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetails = () => setIsProductDetailOpen(true)
    const closeProductDetails = () => setIsProductDetailOpen(false)
    // product details show
    const [productToShow, setProductToShow] = useState({})
    // shopping cart Add to cart
    const [cartProducts, setCartProducts] = useState([])
// Checkout side Menu
    const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu =() => setCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setCheckoutSideMenuOpen(false)
// shopping cart Order

// Loading Page

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  
 const [order, setOrder] = useState([])
    //get product
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
    // get product by title in search
   const [SearchByTitle, setSearchByTitle] = useState(null)
   // get product by Category
   const [SearchByCategory, setSearchByCategory] = useState(null)
  
 
            useEffect(() => {
              // Consumir primera API
              fetch('https://api.escuelajs.co/api/v1/products')
                .then(response => response.json())
                .then(data =>  setItems(data));
                
            }, []);
          


     const filteredItemsByTitle = (items, SearchByTitle)=>{
        return items?.filter( item => item.title.toLowerCase().includes(SearchByTitle.toLowerCase()))
     }
     const filteredItemsByCategory = (items, SearchByCategory)=>{
        return items?.filter( item => item.category.name.toLowerCase().includes(SearchByCategory.toLowerCase()))
     }

     const filterBy = (searchType, items, SearchByTitle, SearchByCategory) => {
     if(searchType === 'BY_TITLE'){
        return filteredItemsByTitle(items, SearchByTitle)
     }
     if(searchType === 'BY_CATEGORY'){
        return filteredItemsByCategory(items, SearchByCategory)
     }

     if(searchType === 'BY_TITLE_AND_CATEGORY'){
        return filteredItemsByCategory(items, SearchByCategory).filter( item => item.title.toLowerCase().includes(SearchByTitle.toLowerCase()))
     }
     if(!searchType ){
        return items
     }
    }

     useEffect(() =>{
        if(SearchByTitle && SearchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items, SearchByTitle, SearchByCategory))
        if(SearchByTitle && !SearchByCategory) setFilteredItems(filterBy('BY_TITLE',items, SearchByTitle, SearchByCategory))
        if(!SearchByTitle && SearchByCategory) setFilteredItems(filterBy('BY_CATEGORY',items, SearchByTitle, SearchByCategory))
        if(!SearchByTitle && !SearchByCategory) setFilteredItems(filterBy( null, items, SearchByTitle, SearchByCategory))

         },[items, SearchByTitle, SearchByCategory])
      
   
    return(
        <shoppingCartContext.Provider value={{
            Count,
            setCount,
            openProductDetails,
            closeProductDetails,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts, 
            setCartProducts,
            isCheckoutSideMenuOpen, 
            setCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,setItems,
            SearchByTitle, setSearchByTitle,
            filteredItems, setFilteredItems,
            SearchByCategory, setSearchByCategory,
            loading, setLoading

        }}>
            {children}
        </shoppingCartContext.Provider>
    )
}