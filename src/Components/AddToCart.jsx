import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
const AddToCart = () => {
  const { cart, CartItemIncrement, CartItemDecrement } =
    useContext(CartContext);
  return (
    <div className="p-3 flex flex-col gap-2">
      {cart.map((item) => (
        <div key={item.id} className="flex gap-2.5 justify-center items-center">
          <img src={item.images} alt={item.images} className="h-15 w-15" />
          <div className="flex gap-2 justify-center  flex-col">
          <h3 className="font-medium text-lg">{item.title}</h3>
          <div className="flex gap-5 justify-center items-center">
          <div className="flex gap-2.5 justify-center items-center">
            <button
              className="font-medium cursor-pointer text-base"
              onClick={() => CartItemIncrement(item)}
            >
              +
            </button>
            <h3 className="font-medium text-lg">{item.quantity}</h3>
            <button
              className="font-medium cursor-pointer text-base"
              onClick={() => CartItemDecrement(item)}
              disabled={item.quantity === 1}
            >
              -
            </button>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              $ {item.quantity * item.price}
            </h3>
          </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default AddToCart;
