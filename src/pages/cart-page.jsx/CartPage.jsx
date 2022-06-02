import React from "react";
import "./cart-page.css";
import { Link } from "react-router-dom";
import {
  NavBar,
  Footer,
  useCartManager,
  HorizontalCard,
} from "./importsAndExports";
import {useSelector} from "react-redux";
function CartPage() {
  // const { state } = useCartManager();
 const cart=useSelector(state=>state.operations.cart);
  return (
    <div>
      <NavBar />
      <div className="banner-upper-empty"></div>

      {cart.length<0
      // state.cart.length <0 
      &&
      (
        <div className="height-100vh flex-center">
          <div className="flex-center ">
            <span className="text-3">There is nothing in the Cart </span>
            <Link
              to="/products-page"
              className="btn btn-outline-pri text margin-l-1"
            >
              Go to products page
            </Link>
          </div>
        </div>
      )}

      {
      // state.cart.length > -1 
      cart.length > -1 
      && 
      (
        <div className="carts-page">
          <div className="selected-items-display">
            {/* {state.cart.map((item) => ( */}
            {cart.map((item) => (
              <HorizontalCard
                key={item._id}
                wholeItem={item}
                image={item.image.src}
                alt={item.image.alt}
                productName={item.name}
                price={item.price.actualPrice}
                quantity={item.qty}
              />
            ))}
          </div>
          {/* price Calculating template with all their designs */}
          <div className="card-payment smooth-square-radius margin-top-1">
            <div className="flex-center-space-betw padding-5-10">
              <h2>Price Details </h2>
            </div>
            <div className="divider-2"></div>

            <div className="flex-center-space-betw padding-l-r">
              <p className="text">
                Price(
                {
                // state.cart.reduce((acc, pri)
                cart.reduce((acc, pri) => {
                  return acc + pri.qty;
                }, 0)}
                <span className="margin-l-1">items</span> ):
              </p>
              <p className="text">
                ₹
                {
                // state.cart.reduce((acc, pri) 
                cart.reduce((acc, pri)  => {
                  return acc + pri.qty * pri.price.previousPrice;
                }, 0)}
              </p>
            </div>

            <div className="flex-center-space-betw padding-l-r">
              <p className="text">Discount:</p>
              <p className="text ztext-line-through">
                -
                {
                // state.cart.reduce((acc, pri)
                cart.reduce((acc, pri) => {
                  return (
                    acc +
                    pri.qty * pri.price.previousPrice -
                    pri.qty * pri.price.actualPrice
                  );
                }, 50)}
              </p>
            </div>

            <div className="flex-center-space-betw padding-l-r">
              <p className="text">Delivery Charges:</p>
              <p className="text">₹50</p>
            </div>
            <div className="divider-2"></div>
            <div className="flex-center-space-betw padding-l-r">
              <h3>Total</h3>
              <h3>
                ₹
                {
                // state.cart.reduce((acc, pri) 
              cart.reduce((acc, pri)  => {
                  return acc + pri.qty * pri.price.actualPrice;
                }, 0)}
              </h3>
            </div>
            <div className="divider-2"></div>
            <p className="text padding-l-r">
              You will save ₹
              {
              // state.cart.reduce((acc, pri) 
              cart.reduce((acc, pri)  => {
                return (
                  acc +
                  pri.qty * pri.price.previousPrice -
                  pri.qty * pri.price.actualPrice
                );
              }, 0)}
              on this order
            </p>
            <div className="flex-center">
              <button className="btn btn-pri width-70  ">Place Order</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export { CartPage };
