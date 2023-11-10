'use client'

import React, { useState } from "react";
import CartContext from "./cartContext";

const CartState = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<{ [key: string]: any }>({});
  const [subTotal, setSubTotal] = useState(0);

  const saveCart = (cart: any) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    let subT: any = 0;
    Object.keys(cart).map((key) => {
      subT += cart[key].qty * cart[key].price;
    });

    subT = subT.toFixed(2);

    setSubTotal(subT);
  };

  const addToCart = (qty: number, price: number, name: string) => {
    let cart: any = cartItems;
    if (name in cart) {
      cart[name].qty += qty;
    } else {
      cart[name] = { name, qty: 1, price };
    }

    setCartItems(cart);
    saveCart(cart);
  };

  const removeCart = (name: string) => {
    let cart: any = cartItems;
    delete cart[name];
    setCartItems(cart);
    saveCart(cart);
  };

  const cartQuantity = () => {
    let nos = 0;
    Object.keys(cartItems).map((key) => {
      nos += cartItems[key].qty;
    });
    return nos;
  };

  let NosOfQuantityCart = cartQuantity();

  return (
    <CartContext.Provider
      value={{
        cartItems,
        NosOfQuantityCart,
        setCartItems,
        addToCart,
        removeCart,
        subTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
