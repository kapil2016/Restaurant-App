import classes from "./CartModal.module.css";
import ReactDOM from "react-dom";
import { useContext } from "react";
import CartContext from "../Contexts/CartModalContext";
const target = document.getElementById("cartmodal");

const Modal = () => {
const ModalState = useContext(CartContext);
const buttonClickHandler = () => {
    ModalState.setVisibility(false);
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes["cart-items"]}>Sushi</div>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={classes.actions}>
          <button onClick={buttonClickHandler}> Close</button>
          <button className={classes.button}> Order</button>
        </div>
      </div>
    </div>
  );
};
const CartModal = (props) => {
  return <>{props.visibility && ReactDOM.createPortal(<Modal />, target)}</>;
};

export default CartModal;
