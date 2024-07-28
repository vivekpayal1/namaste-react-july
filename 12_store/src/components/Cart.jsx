import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../store/store";
import RestrauntCard from "./RestrauntCard";
import { clearCart } from "../store/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  function handlClearAll() {
    dispatch(clearCart());
  }
  return (
    <div>
      {cartItems.map((ele, index) => {
        console.log(ele.card.info.id);
        return (
          <div
            key={index}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow "
          >
            <h3>{ele.card.info.name}</h3>
            <h3>{ele.card.info.price}</h3>
            <span>{ele.card.info.id}</span>
            <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Remove
            </button>
          </div>
        );
      })}
      <button className="handlClearAll" onClick={handlClearAll}>
        Clear All
      </button>
    </div>
  );
};

export default Cart;
