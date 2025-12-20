import { createContext, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { userData } = useContext(AuthContext);
  const handleAddToCart = (data) => {
    if (userData) {
      const findItem = cart.find((item) => item.id === data.id);
      if (findItem) {
        const newArray = cart.map((item) =>
          item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(newArray);
      } else {
        setCart((prev) => [...prev, { ...data, quantity: 1 }]);
      }
    } else {
      alert("Please Login");
    }
  };

  const CartItemIncrement = (cartItem)=>{
    const findItem = cart.find((item)=> item.id === cartItem.id)
    if(findItem){
      const newArray = cart.map((item)=> item.id === cartItem.id ? {...item, quantity: item.quantity+1}: item)
      setCart(newArray);
    }
  }
  const CartItemDecrement = (cartItem)=>{
    const findItem = cart.find((item)=> item.id === cartItem.id)
    if(findItem){
      const newArray = cart.map((item)=> item.id === cartItem.id ? {...item, quantity: item.quantity-1}: item)
      setCart(newArray);
    }
  }

console.log(cart);
  return (
    <CartContext.Provider value={{ cart, setCart, handleAddToCart, CartItemIncrement, CartItemDecrement }}>
      {children}
    </CartContext.Provider>
  );
};
