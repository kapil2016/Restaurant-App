import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect , useState } from "react";
import CartContext from "../../Contexts/CartModalContext";

const HeaderCartButton = () => {
  const ctx = useContext(CartContext);
  const[buttonAnimation , setButtonAnimation] =useState(false);
  
  const buttonClickHandler = () => {
    ctx.setVisibility(true);
  };
 let count = 0 ;
 ctx.orderList.forEach((item)=>{count+= parseInt(item.count) })
 const buttonstyle = `${classes.button} ${buttonAnimation ? classes.bump : ''}`;
 useEffect(()=>{
  if(count===0) return ;
  setButtonAnimation(true);
  const timer = setTimeout(()=>{
    setButtonAnimation(false);
  },300);
  return ()=>{
    clearTimeout(timer);
  }
 },[count])
 
  return (
    <>
      <button className={ buttonstyle } onClick={buttonClickHandler}>
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
