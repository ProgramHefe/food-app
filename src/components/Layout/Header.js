import React, { Fragment } from "react";
import Meals from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Meals please</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={Meals} alt='Good yummy food'/>
        </div>
    </Fragment>
}

export default Header;