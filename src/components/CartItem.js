import React from "react";
import { Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { removeFromCart , incrementQuantity , decrementQuantity } from "../redux/Slices/cartSlice";


const CartItem = ({ item }) => {
  const { productId, name, price, quantity, image } = item;

  const dispatch = useDispatch();  

  const Delete = () => {
    dispatch(removeFromCart({ productId }));
  };

  const Increase =() => {
    dispatch(incrementQuantity({productId }));
  }
  const Decrease =() => {
    dispatch(decrementQuantity({productId}));
  }
  return (
    <div className="cart-item  text-xl w-[80%]">
      <div className="item-info flex gap-8 items-center">
        <img src={image} alt={name} className="w-[180px]" />
        <article>
          <Link to={`/product/${productId}`} className="link">{name}</Link>
          <p>${price}</p>
        </article>
      </div>

      <div className="item-handlers flex gap-4">
        <button className="hover:bg-black hover:text-white w-8 h-8 rounded-md text-xl" onClick={Decrease}>-</button>
        <p>{quantity}</p>
        <button className="hover:bg-black hover:text-white w-8 h-8 rounded-md text-xl" onClick={Increase}>+</button>
      </div>
      <button className=" hover:text-red-500  text-xl" onClick={Delete}>
        <i className="fa-solid fa-trash"></i>
        </button>
    </div>
  );
};

export default CartItem;
