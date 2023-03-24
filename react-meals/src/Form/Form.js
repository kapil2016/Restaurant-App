import classes from "./Form.module.css";
import { useState } from "react";
const Form = (props) => {
 const [inputValue , setInputValue] = useState(1);

  const inputChangeHandler = (e) => {
    let value = e.target.value ;
    if (value<1){
      setInputValue(1)
    }else{
      setInputValue(value)
    }
   
  }
  const formSubmitHandler = (e)=>{
    e.preventDefault();
    props.onSubmit(inputValue);

  }


  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.input}>
        <label  htmlFor={props.id}>
           Amount
        </label>
        <input
          type='number'
          value={inputValue}
          id={props.id}
          onChange={inputChangeHandler}
          
        ></input>
      </div>
      <button  id={props.id}>
        +Add
      </button>
    </form>
  );
};
export default Form;
