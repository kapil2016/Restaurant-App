import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../Contexts/CartModalContext";

const HeaderCartButton = () => {
  const ctx = useContext(CartContext);
  
  const buttonClickHandler = () => {
    ctx.setVisibility(true);
  };
 let count = 0 ;
 ctx.orderList.forEach((item)=>{count+= parseInt(item.count) })
 
  return (
    <>
      <button className={`${classes.button} ${classes.bump}` } onClick={buttonClickHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{count}</span>
      </button>
    </>
  );
};
export default HeaderCartButton;
