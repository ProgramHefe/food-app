import React from "react";
import { useContext, useEffect, useState } from "react";
import CartIcon from '../Cart/CartIcon';
import CartContext from "../../store/card-context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
   const [btnHighlighted, setBtnHighlighted] = useState(false);
   const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

   const nrOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
   }, 0);


   const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`

   useEffect(()=> {
    if(items.lenght === 0){
        return;
    }
    setBtnHighlighted(true);

    const timer = setTimeout(() => {
        setBtnHighlighted(false);
    }, 300);

    return () => {
        clearTimeout(timer);
    }
   }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{nrOfCartItems}</span>
    </button>
}

export default HeaderCartButton;