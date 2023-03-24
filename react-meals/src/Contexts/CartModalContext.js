import React from "react";
const CartContext = React.createContext({
  isVisable: false,
  orderList:[],
  Orders: ()=>{},
  setVisibility: ()=>{}

});

export default CartContext;
