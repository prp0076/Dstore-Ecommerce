import "./CartItem.scss";
import {useContext} from "react";

import { MdClose } from "react-icons/md";
import { Context } from "../../../utils/context";
const CartItem = () => {
    const {cartItems,handleRemoveFromCart,handleCartproductquantity} = useContext(Context);
    return (<div className="cart-products">
        {cartItems.map(item => (
          <div key= {item.id} className="cart-product">
          <div className="img-container">
              <img src={ item.attributes.img.data[0].attributes.url} alt="" />
          </div>
          <div className="prod-details">
              <span className="name">{item.attributes.title}</span>
              <MdClose className="close-btn" onClick={() => handleRemoveFromCart(item)}/>
              <div className="quantity-buttons">
                          <span onClick={()=> handleCartproductquantity('dec' , item)}>-</span>
                          <span>{item.attributes.quantity}</span>
                          <span  onClick={()=> handleCartproductquantity('inc' , item)}>+</span>
              </div>
              <div className="text">
                  <span>{item.attributes.quantity}</span>
                  <span>x</span>
                  <span className="highlight" >&#8377;{item.attributes.price * item.attributes.quantity} </span>
              </div>
          </div>
      </div>
        ))}
        
    </div>
    )
};

export default CartItem;
