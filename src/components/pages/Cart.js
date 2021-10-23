import Header from '../Header';

const Cart = ({ shoppingCart, navbarOpen, handleNavbar }) => {
  console.log(shoppingCart);
  return (
    <div className="">
      <Header navbar={navbarOpen} onClick={handleNavbar} />
      <div className="h-32 bg-office bg-cover bg-center shadow-xl"></div>
      <div className="grid grid-cols-2 gap-2 justify-items-center pt-4 mx-4">
        {shoppingCart.map((cartItem) => {
          return (
            <div className="flex flex-col w-full h-auto border-black rounded-lg text-center shadow-lg">
              <img
                className="pb-4 w-full h-full rounded-lg"
                src={cartItem.image}
                alt=""
              />
              <h3 className="p-2 text-lg ">{cartItem.title}</h3>
              <p className="p-2 text-sm">{cartItem.text}</p>
              <div className="">
                <button className="px-3 m-2 py-1 shadow-md rounded-full">
                  -
                </button>
                <button className="px-3 m-2 py-1 shadow-md rounded-full">
                  +
                </button>
              </div>
              <p>Quantity: {cartItem.amount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
