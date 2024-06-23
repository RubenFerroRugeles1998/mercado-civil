import React from "react";
import classes from './LandingPage.module.scss';
import logo from "../assets/Images/LandingPage/logoMercadoCivil.png";
import casco from "../assets/Images/constructionProducts/casco.jpeg";

const LandingPage = () => {
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
                        <div className={classes.landingPageTabsClick}>Inicia sesión</div>
                        <div className={classes.landingPageTabsClick}>Registrate</div>
                    </div>
                    <div>lang</div>
                </div>
            </div>
            <div className={classes.CardsContainer}>
                <div className={classes.productCard}>
                    <div>Casco</div>
                    <img src={casco} alt="casco" height="180px" />
                    <div>$85000 Cop</div>
                </div>
                <div className={classes.productCard}>product 2 ...</div>
                <div className={classes.productCard}>product 3 ...</div>
                <div className={classes.productCard}>product 4 ...</div>
                <div className={classes.productCard}>product 5 ...</div>
                <div className={classes.productCard}>product 6 ...</div>
                <div className={classes.productCard}>product 7 ...</div>
                <div className={classes.productCard}>product 8 ...</div>
                <div className={classes.productCard}>product 9 ...</div>
                <div className={classes.productCard}>product 10 ...</div>
                <div className={classes.productCard}>product 11 ...</div>
                <div className={classes.productCard}>product 12 ...</div>
                <div className={classes.productCard}>product 13 ...</div>
            </div>
            <div>Footer</div>
        </div>
    )
}

export default LandingPage;