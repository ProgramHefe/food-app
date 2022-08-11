import React, { Fragment } from "react";
import MealsTotal from "./MealsTotal";
import MealsAvailable from "./MealsAvailable";

const Meals = props => {
return <Fragment>
    <MealsTotal />
    <MealsAvailable />
</Fragment>
}

export default Meals;