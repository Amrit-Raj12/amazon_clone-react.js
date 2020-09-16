import React from 'react';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";



function Checkout(){
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
    <div className="checkout__left">
    <img className="checkout_ad" src="https://www.unitasterdays.com/images/banner-uosw.gif"
     alt="" />
     {basket?.length===0 ? (
       <div>
       <h3>{user?.email}</h3>
        <h2>Your Shooping Basket is empty</h2>
        <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
       </div>
     ) : (
       <div>
        <h2 className="checkout__title">Your shopping basket </h2>

        {/* list out all the Checkout Products */}
        {basket?.map((item)=>(
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />

        ))}

       </div>
     )}
     </div>
     {basket.length > 0 &&(
       <div className="checkout__right">
        <Subtotal />
       </div>
     )}
    </div>
  );
}

export default Checkout;
