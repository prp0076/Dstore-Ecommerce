import "./Home.scss";
import Category from "./Category/Category";
import  Banner  from "./Banner/Banner";
import Products from "../Products/Products";
import { useEffect,useContext } from "react";
import  {Context}  from "../../utils/context";
import {fetchDataFromApi} from "../../utils/api" 
const Home = () => {
    const {categories , setCategories,products,setProducts} = useContext(Context)
    useEffect(()=>{
        getProducts() 
        getCategories()
    },[]);
    const getCategories=()=>{
        fetchDataFromApi("/api/categories?populate=*").then((res)=> {
          
          setCategories(res)
         }
        );
    }
    const getProducts=()=>{
        fetchDataFromApi("/api/products?populate=*").then((res)=> {
          
          setProducts(res)
         }
        );
    }
    return (
        <div>
            <Banner/>
            <div className="main-content">
                <div className="layout">
                <Category categories={categories}/>
                <Products products={products} headingText="popular products"/>
                </div>
            </div>
           
        </div>
    );
};

export default Home;
