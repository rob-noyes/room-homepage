import { FaTrash } from 'react-icons/fa';

const CartContent = (cartItem) => {
  console.log(cartItem.cartItem);
  return (
    <div
      className="flex flex-col w-full h-auto border-black rounded-lg text-center shadow-lg"
      key={cartItem.cartItem.id}
    >
      <img
        className="pb-4 w-full h-full rounded-lg"
        src={cartItem.cartItem.image}
        alt=""
      />
      <h3 className="p-2 text-lg ">{cartItem.cartItem.title}</h3>
      <p>Quantity: {cartItem.cartItem.amount}</p>
      <div>
        <button
          className="px-3 m-2 py-1 shadow-md rounded-full"
          onClick={cartItem.addQuantity}
        >
          +
        </button>
        <button
          className="px-3 m-2 py-1 shadow-md rounded-full"
          onClick={cartItem.removeQuantity}
        >
          -
        </button>
      </div>
      <div className="flex justify-center">
        <button
          className=" px-3 m-2 py-3 w-3/12 shadow-md rounded-full"
          onClick={cartItem.onRemove}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartContent;
