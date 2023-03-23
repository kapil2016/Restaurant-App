import classes from './MealItem.module.css'
const MealItem = (props)=>{
    return (
       <section className={classes.meal}>
            <div>
            <div className={classes.name}>{props.Item.name}</div>
            <div className={classes.description}>{props.Item.description}</div>
            <div className={classes.price}>{props.Item.price}</div>
            </div>
        </section>
    )
}
export default MealItem ;