import "./Cart.scss";
import {MdClose} from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import Carditem from "./CartItem/CartItem"
import { useContext } from "react";
import { Context } from "../../utils/context";
import {loadStripe} from "@stripe/stripe-js"
import {makePeymentRequest} from "../../utils/api"
const Cart = ({setShowCart}) => {
    const {cartItems,cartSubTotal} = useContext(Context);
    const stripePromis = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
    const handlePeyment = async () => {
        try {
            const stripe = await stripePromis;
            const res = await makePeymentRequest.post("/api/orders" ,{
              products : cartItems
            });
            await stripe.redirectToCheckout({
              sessionId : res.data.stripeSession.id
            }) 
        } catch (error) {
            console.log(error)
        }
      
    }
    return <div className="cart-panel">
        {/* for page opacity background opacity */}
        <div className="opac-layer">
          
        </div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">
                    Shopping Cart
                </span>
                <span className="close-btn" onClick={()=>setShowCart(false)}>
                    <MdClose/>
                    <span className="text">close</span>
                </span>
            </div>
            {!cartItems?.length &&<div className="empty-cart">
                <BsCartX/>
                <span>No product in the cart</span>
                <button className="return-cta">RETURN TO SHOP</button>
            </div>}
            {!!cartItems?.length &&<>
             <Carditem/>
             {/*slide card footer section */}
             <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">SubTotal;</span>
                    <span className="text total">&#8377;{cartSubTotal}</span>
                </div>
                <div className="button">
                    <button className="checkout-cta" onClick={handlePeyment}>Checkout</button>
                </div>
             </div>
            </>}
        </div>
    </div>;
};

export default Cart;
