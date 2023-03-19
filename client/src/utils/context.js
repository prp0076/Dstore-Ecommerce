import {createContext,useEffect,useState} from "react"
import { useLocation } from "react-router-dom";
import Product from "../components/Products/Product/Product";
export const Context = createContext();
const Appcontext=({children}) => {
    const [categories,setCategories]=useState();
    const [products,setProducts]=useState();
    // cart functionality
    const [cartItems, setCartitems]=useState([])
    const [cartCount , setCartCount] = useState(0);
    const [cartSubTotal,setCartSubtotal] = useState(0);
    const location = useLocation();
    // location is for reloading
    useEffect(()=>{
        window.scrollTo(0,0);
    },[location])
    useEffect(()=>{

      let count =0;
      cartItems.map((item) => (count += item.attributes.quantity)) 
      setCartCount(count) 
      let subtotal = 0;
      cartItems.map(item => subtotal += item.attributes.price * item.attributes.quantity);
      setCartSubtotal(subtotal)
    },[cartItems])
    const handleAddtoCart = (product,quantity) => {
        let items =[...cartItems];
        let index= items.findIndex(p => p.id ===product.id)
        if(index!== -1){
            // if product is in cart
            items[index].attributes.quantity += quantity
        }
        else{
            //if not in cart
            product.attributes.quantity = quantity
            items = [...items ,product]
        }
        setCartitems(items);
    }
    const handleRemoveFromCart = (product)=>{
        let items =[...cartItems];
         items = items.filter(p => p.id !== product.id);
         setCartitems(items)
    }
    const handleCartproductquantity = (type,product) => {
        let items =[...cartItems];
        let index = items.findIndex(p => p.id === product.id);
        if(type === "inc"){
            items[index].attributes.quantity += 1;
        }else if (type === "dec"){
            if (items[index].attributes.quantity === 1) {
                return ;
            }
            items[index].attributes.quantity -= 1;
        }
        setCartitems(items);
        
    }
    return(
        <Context.Provider value = {{
            categories,
            setCategories,
            products,
            setProducts,
            cartItems,
            setCartitems,
            cartCount,
            setCartCount,
            cartSubTotal,
            setCartSubtotal,
            handleAddtoCart,
            handleRemoveFromCart,
            handleCartproductquantity
        }}>{children}</Context.Provider>
    )
}
export default Appcontext