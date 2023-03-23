import classes from "./CartModal.module.css";
import ReactDOM from "react-dom";

const target = document.getElementById("cartmodal");

const Modal = () => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes["cart-items"]}>Sushi</div>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={classes.actions}>
          <button> Close</button>
          <button className={classes.button}> Order</button>
        </div>
      </div>
    </div>
  );
};
const CartModal = (props) => {
  return <>{ReactDOM.createPortal(<Modal />, target)}</>;
};

export default CartModal;
