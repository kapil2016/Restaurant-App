import classes from './Header.module.css' ;
import mealsimage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = ()=>{
    return (
        <div className={classes['main-image']}>
            <div className={classes.header}>
                <h1> ReactMeals </h1>
                <HeaderCartButton></HeaderCartButton>
            </div>
            <img src={mealsimage} alt="table of meals"/>
        </div>
    )
}

export default Header ;