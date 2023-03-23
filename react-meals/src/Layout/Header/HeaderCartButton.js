import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";


import { useContext } from "react";
import CartContext from "../../Contexts/CartModalContext";

const HeaderCartButton = () => {
 const ModalState = useContext(CartContext)
 const buttonClickHandler = ()=>{
   ModalState.setVisibility(true);
  } 
  
 
  return (
    <>
      <button className={classes.button} onClick={buttonClickHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </>
  );
};
export default HeaderCartButton;
