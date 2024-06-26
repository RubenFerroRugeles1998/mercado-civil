import React, { useState } from "react";
import classes from './LandingPage.module.scss';
import { Each } from './Each';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import products from '../data/products.json';
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
        { name: "Casco", image: casco, price: 85000 },
        { name: "Pala", image: pala, price: 75000 },
        { name: "Pica", image: pica, price: 185000 },
        { name: "Carretilla", image: carretilla, price: 585000 },
        { name: "Overol", image: overol, price: 58000 },
        { name: "Casco", image: casco, price: 85000 },
        { name: "Pala", image: pala, price: 75000 },
        { name: "Pica", image: pica, price: 185000 },
        { name: "Carretilla", image: carretilla, price: 585000 },
        { name: "Overol", image: overol, price: 58000 }
    ];

    // Para el Search Bar ----------------------------------
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    // -----------------------------------------------------

    return (
        <div className={classes.LandingPageContainer}>
            <div className={classes.landingPageHeader}>
                <img src={logo} alt="logo" height="150px" />
                <div className={classes.landingPageTabs}>
                    <div className={classes.landingPageTabsClick}>Inicio</div>
                    <div className={classes.landingPageTabsClick}>Productos</div>
                    <div className={classes.landingPageTabsClick}>Misión</div>
                    <div className={classes.landingPageTabsClick}>Visión</div>
                </div>
                <div className={`${classes.landingPageTabs} ${classes.rightTabs}`}>
                    <div className={`${classes.landingPageTabs} ${classes.contactAndShopTabs}`}>
                        <div className={classes.landingPageTabsClick}>Contactenos</div>
                        <Tooltip title="Carrito de compras" placement="bottom" arrow>
                            <div className={classes.landingPageTabsClick}>
                                <i className="icon-shopping-cart" ></i>
                            </div>
                        </Tooltip>
                    </div>
                    <div>lang</div>
                </div>
            </div>
            <div className={classes.landingPageBody}>
                <div className={classes.searchAndCategoriesContainer}>
                    <div className={classes.searchInputContainer} >
                        <TextField
                            className={classes.searchInput}
                            id="outlined-basic"
                            label="Buscar"
                            variant="outlined"
                            value={inputValue}
                            onChange={handleChange}
                        />
                        <div className={classes.xIcon}>
                            <i className="icon-x" ></i>
                        </div>
                    </div>
                    <div>
                        <div>Todas</div>
                        <div>Tubería</div>
                        <div>Cementos</div>
                        <div>Maquinaria</div>
                        <div>Dotación</div>
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
            </div>
        </div>
    )
}

export default LandingPage;