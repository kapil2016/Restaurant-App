import classes from "./MealItem.module.css";
import Form from "../Form/Form";
import { useContext } from "react";
import CartContext from "../Contexts/CartModalContext";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const orderList = [...ctx.orderList];

  const formSubmitHandler = (value) => {
    const n = orderList.length;
    if (n === 0) {
      orderList.push({
        id: props.Item.id,
        price: props.Item.price,
        name: props.Item.name,
        count: parseInt(value),
      });
    } else {
      for (let i = 0; i <= n; i++) {
        if (i < n && orderList[i].id === props.Item.id) {
          orderList[i].count = orderList[i].count + parseInt(value);
          break;
        } else if (n === i) {
          orderList.push({
            id: props.Item.id,
            price: props.Item.price,
            name: props.Item.name,
            count: parseInt(value),
          });
        }
      }
    }
    console.log(orderList)
    ctx.Orders(orderList)
  };
  return (
    <section className={classes.meal}>
      <div>
        <div className={classes.name}>{props.Item.name}</div>
        <div className={classes.description}>{props.Item.description}</div>
        <div className={classes.price}>{props.Item.price}</div>
      </div>
      <Form id={props.Item.id} onSubmit={formSubmitHandler}></Form>
    </section>
  );
};
export default MealItem;
