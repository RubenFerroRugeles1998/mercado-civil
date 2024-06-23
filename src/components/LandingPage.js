import React from "react";
import classes from './LandingPage.module.scss';
import { Each } from './Each';
import logo from "../assets/Images/LandingPage/logoMercadoCivil.png";
import casco from "../assets/Images/constructionProducts/casco.jpeg";
import pala from "../assets/Images/constructionProducts/pala.jpg";
import pica from "../assets/Images/constructionProducts/pica.jpeg";
import carretilla from "../assets/Images/constructionProducts/carretilla.jpeg";
import overol from "../assets/Images/constructionProducts/overol.jpeg";

const LandingPage = () => {

    let products = [
        { name: "Casco", image: casco, price: 85000 },
        { name: "Pala", image: pala, price: 75000 },
        { name: "Pica", image: pica, price: 185000 },
        { name: "Carretilla", image: carretilla, price: 585000 },
        { name: "Overol", image: overol, price: 58000 },
    ];

    return (
        <div className={classes.LandingPageContainer}>
            <div className={classes.landingPageHeader}>
                <img src={logo} alt="logo" height="150px" />
                <div className={classes.landingPageTabs}>
                    <div className={classes.landingPageTabsClick}>Pestaña 1</div>
                    <div className={classes.landingPageTabsClick}>Pestaña 2</div>
                    <div className={classes.landingPageTabsClick}>Pestaña 3</div>
                    <div className={classes.landingPageTabsClick}>Pestaña 4</div>
                </div>
                <div className={`${classes.landingPageTabs} ${classes.rightTabs}`}>
                    <div className={`${classes.landingPageTabs} ${classes.authTabs}`}>
                        <div className={classes.landingPageTabsClick}>Opción 1</div>
                        <div className={classes.landingPageTabsClick}>Opción 2</div>
                    </div>
                    <div>lang</div>
                </div>
            </div>
            <div className={classes.CardsContainer}>
                <Each of={products} render={(item, index) =>
                    <div className={classes.productCard}>
                        <div>{item.name}</div>
                        <img src={item.image} alt={item.image} height="180px" />
                        <div>${item.price} Cop</div>
                    </div>
                } />
            </div>
            <div>Footer</div>
        </div>
    )
}

export default LandingPage;