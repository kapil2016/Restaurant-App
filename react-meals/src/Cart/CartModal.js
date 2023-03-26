import classes from "./CartModal.module.css";
import ReactDOM from "react-dom";
import { useContext } from "react";
import CartContext from "../Contexts/CartModalContext";
import CartItem from "./CartItem";

const target = document.getElementById("cartmodal");

const Modal = (props) => {
  const ctx = useContext(CartContext);
  const buttonClickHandler = () => {
    ctx.setVisibility(false);
  };
  const CartItemList = props.orderList.map((item)=>{
   return <CartItem key = {item.id} price = {item.price} count = {item.count} name = {item.name} id= {item.id} ></CartItem> 

  })
  let totalAmount = 0 ;
  props.orderList.forEach(item => {
    totalAmount = totalAmount + item.price*item.count;
  });
  totalAmount = totalAmount.toFixed(2);
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes['cart-items']}>
        {CartItemList}
        </div>
          
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{`$ ${totalAmount}`}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={buttonClickHandler}> Close</button>
          {totalAmount > 0 && <button className={classes.button}> Order</button>}
        </div>
      </div>
    </div>
  );
};
const CartModal = (props) => {
  return <>{props.visibility && ReactDOM.createPortal(<Modal orderList ={props.orders} />, target)}</>;
};

export default CartModal;
