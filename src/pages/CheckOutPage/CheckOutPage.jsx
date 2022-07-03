import "./CheckOutPage.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NavBar, Footer, AddressCard } from "components";
import { useState } from "react";
import { notifyWarn } from "Utilities/Notifications";
import {
  deleteItemFromCart,
  openAddressModal,
} from "Redux/Reducers-Redux/operationsSlice";
import { notifyInfo } from "Utilities";

const CheckOutPage = () => {
  const cart = useSelector((state) => state.operations.cart);
  const [addressState, setAddressState] = useState({});
  const currentUser = useSelector((state) => state.auth.currentUser);
  const addresses = useSelector((state) => state.operations.address);
  const amount = cart.reduce((acc, pri) => {
    return acc + pri.qty * pri.price.actualPrice;
  }, 0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("please enter amount");
    } else if (!addressState.name) {
      notifyWarn("please select the address");
    } else {
      var options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        key_secret: process.env.REACT_APP_RAZORPAY_SECRET,
        amount: amount * 100,
        currency: "INR",
        name: "Piston_Parts",
        description: "Happy shopping",
        handler: function (response) {
          navigate("/confirmation");
          notifyInfo(
            `Order Placed with order Id-${response.razorpay_payment_id}`
          );
          cart.map(({ _id }) => dispatch(deleteItemFromCart(_id)));
        },
        prefill: {
          name: currentUser.name,
          email: currentUser.email,
          contact: currentUser.mobileNumber,
        },
        notes: {
          address: "Piston",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };
  return (
    <div>
      <NavBar />
      <div className="banner-upper-empty"></div>

      {cart.length === 0 ? (
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
      ) : (
        <div className="checkout-page">
          <div className="selected-items-display">
            {addresses.length > 0 ? (
              addresses.map((address) => (
                <AddressCard
                  address={address}
                  state={addressState}
                  setState={setAddressState}
                />
              ))
            ) : (
              <p>
                No Address Available{" "}
                <button
                  className="btn btn-green margin-1"
                  onClick={() => {
                    dispatch(openAddressModal());
                  }}
                >
                  Add address
                </button>
              </p>
            )}
          </div>
          {/* price Calculating template with all their designs */}
          <div className="checkout-card__payment smooth-square-radius margin-top-1">
            <div className="flex-center-space-betw padding-5-10">
              <h2 className="text-center">Order Details </h2>
            </div>
            <div className="divider-2"></div>
            <div className="flex-center-space-betw padding-l-r">
              <h5 className="text">Item</h5>
              <h5 className="text">Quantity</h5>
            </div>
            {cart.map((product) => (
              <div
                className="flex-center-space-betw padding-l-r"
                key={product._id}
              >
                <p className="text">{product.name}</p>
                <p className="text ">{product.qty}</p>
              </div>
            ))}
            <div className="divider-2"></div>
            <div className="flex-center-space-betw padding-l-r">
              <p className="text">
                Price(
                {cart.reduce((acc, pri) => {
                  return acc + pri.qty;
                }, 0)}
                <span className="margin-l-1">items</span> ):
              </p>
              <p className="text">
                ₹
                {cart.reduce((acc, pri) => {
                  return acc + pri.qty * pri.price.previousPrice;
                }, 0)}
              </p>
            </div>
            <div className="flex-center-space-betw padding-l-r">
              <p className="text">Discount:</p>
              <p className="text ztext-line-through">
                -
                {cart.reduce((acc, pri) => {
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
              <h3>₹{amount}</h3>
            </div>
            <div className="divider-2"></div>
            <p className="text padding-l-r">
              You will save ₹
              {cart.reduce((acc, pri) => {
                return (
                  acc +
                  pri.qty * pri.price.previousPrice -
                  pri.qty * pri.price.actualPrice
                );
              }, 0)}{" "}
              on this order
            </p>
            <div className="flex-center">
              <button className="btn btn-pri width-70 " onClick={handleSubmit}>
                Pay
              </button>
            </div>
            <div className="flex-center-center">
              <button
                className="btn btn-green margin-1"
                onClick={() => {
                  dispatch(openAddressModal());
                }}
              >
                Add address
              </button>
            </div>
            {addressState.name && (
              <>
                <p> {addressState.name}</p>
                <p>
                  <span>{addressState.house},</span>
                  <span>{addressState.city},</span>
                  <span>{addressState.state},</span>
                  <span>{addressState.postalCode}.</span>
                </p>
              </>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export { CheckOutPage };
