import "./Header.scss";
import { useEffect,useState,useContext } from "react";
import {useNavigate} from "react-router-dom";
import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import { MdLogin, MdLogout } from "react-icons/md";
import  Search  from "./Search/Search";
import  Cart  from "../Cart/Cart";
import { Context } from "../../utils/context";
import { useAuth0 } from "@auth0/auth0-react";
import About from "../About/About"

const Header = () => {
    const [scrolled,setScrolled]=useState(false);
    const [showcart, setShowCart]=useState(false);
    const [showsearch , setShowsearch]=useState(false);
    // const [showlog , setShowLog] = useState(false);
    const [showabout , setShowAbout]=useState(false);
    const {cartCount} = useContext(Context);
    const navigate = useNavigate()
    const { loginWithRedirect,logout ,isAuthenticated} = useAuth0();
    const handleScroll =()=>{
    const offset =window.scrollY
    if(offset>200){   
     setScrolled(true)
    }
    }
    useEffect(()=>{
     window.addEventListener("scroll",handleScroll)
    },[])
    return (
        <>
        <header className={`main-header ${scrolled?"sticky-header":" "}`}>
            <div className="header-content">
                <ul className="left">
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={()=>setShowAbout(true)}>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center" onClick={() => navigate("/")}>DSTORE</div>
                <div className="right">
                    <TbSearch onClick={()=>setShowsearch(true)}></TbSearch>
                    
                    <span className="cart-icon" onClick={()=>setShowCart(true)}>
                        <CgShoppingCart></CgShoppingCart>
                        {!!cartCount &&<span>{cartCount}</span>}
                    </span>
                    {/* login logout functionality */}
                    {isAuthenticated?
                     (<MdLogout onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}/> ):( <MdLogin onClick={() => loginWithRedirect()} />)
                    }
                   
                    
                    {/* yha se hi krna hai onclick event add krna hai use state ke through */}
                </div>
            </div>
        </header>
        {/* if show cart value is true then cart component is available otherwise not s */}
       {showcart && <Cart setShowCart={setShowCart}/>}
       {/* pass setshowcart value as a prop for close button in cart */}
       {showsearch && <Search setShowsearch={setShowsearch}/>}
       {/* for login component */}
       {/* {showlog && <Login setShowLog={setShowLog}/>} */}
       {showabout && <About setShowAbout={setShowAbout}/>}
        </>
    );
};

export default Header;
