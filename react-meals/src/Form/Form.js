import classes from "./Form.module.css";
const Form = (props) => {
  return (
    <div className={classes.form}>
      <div className={classes.input}>
        <label  htmlFor={props.id}>
           Amount
        </label>
        <input
          type="number"
          value="1"
          id={props.id}
        ></input>
      </div>
      <button  id={props.id}>
        +Add
      </button>
    </div>
  );
};
export default Form;
