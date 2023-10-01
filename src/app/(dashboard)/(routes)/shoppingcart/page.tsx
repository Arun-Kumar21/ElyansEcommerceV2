"use client";

import { useCartContext } from "@/app/Context/cart/store";

const ShoppingCart = () => {
  const { removeCart, subTotal } = useCartContext();
  const cartItems = JSON.parse(localStorage.getItem("cart") || "{}");

  return (
    <div>
      <div className="h-full">
        <h1 className="text-3xl font-600 p-7 ps-10 opacity-70">
          Shopping Cart
        </h1>

        <div className="mainContent h-full flex flex-col md:flex-row gap-3 md:ps-10 md:p-4">
          <div className="cardItems w-[100vw] h-[50%] p-5 md:w-[45vw]  md:h-full md:ms-10">
            {Object.keys(cartItems).length == 0 && (
              <div className="flex justify-center items-center h-[30vh]">
                <h1 className="text-xl opacity-50">No item is added to cart</h1>
              </div>
            )}

            {Object.keys(cartItems).map((k) => {
              return (
                <div
                  className="flex m-2 justify-between pb-5 shadow-md p-5 dark:bg-black"
                  key={k}
                >
                  <div>
                    <h3 className="md:text-xl">{cartItems[k].name}</h3> x{" "}
                    {cartItems[k].qty}
                    <h3 className="text-xl font-bold">
                      $ {cartItems[k].price}
                    </h3>
                  </div>

                  <div className="">
                    <button
                      className="bg-black text-white p-2 rounded-md mt-2"
                      onClick={() => {
                        removeCart(cartItems[k].name);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="orderSummary  p-5 h-[50%] w-[100vw]  md:w-[40vw] lg:h-[40vh]">
            <div className="px-10 pt-10 flex flex-col gap-6">
              <h2 className="text-xl">Order Summary</h2>
              <hr />
            </div>

            <div>
              <div className="flex justify-between items-center px-10 py-5">
                <h3 className="font-bold">Order Total</h3>

                <h3 className="font-bold">$ {subTotal}</h3>
              </div>

              <div className="flex justify-center items-center mx-7">
                <button
                  type="submit"
                  className="bg-black text-white py-5 w-full dark:bg-white dark:text-black dark:hover:bg-slate-300 dark:hover:text-black transition duration-300 ease-in-out"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
