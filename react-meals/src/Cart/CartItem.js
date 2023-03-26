import classes from "./CartItem.module.css";
import CartContext from "../Contexts/CartModalContext";
import { useContext } from "react";

const CartItem = (props) => {
  const ctx = useContext(CartContext);
  const orderList = [...ctx.orderList];

  const removeItemHandler = () => {
    let n = orderList.length;

    for (let i = 0; i < n; i++) {
      if (orderList[i].id === props.id) {
        if (orderList[i].count > 1) {
          orderList[i].count -= 1;
          break;
        } else {
          orderList.splice(i, 1);
          break;
        }
      }
    }
    ctx.Orders(orderList);
  };

  const addItemHandler = () => {
    let n = orderList.length;
    for (let i = 0; i < n; i++) {
      if (orderList[i].id === props.id) {
        orderList[i].count += 1;
      }
    }
    ctx.Orders(orderList);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{`$ ${props.price}`}</span>
          <span className={classes.amount}>x {props.count}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
