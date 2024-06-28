import React, { useState } from "react";
import classes from "./HomePage.module.scss";
import logo from "../../assets/Images/LandingPage/whiteLogo.jpg";
import { Each } from '../Utils/Each';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import casco from "../../assets/Images/constructionProducts/casco.jpeg";
import pala from "../../assets/Images/constructionProducts/pala.jpg";
import pica from "../../assets/Images/constructionProducts/pica.jpeg";
import carretilla from "../../assets/Images/constructionProducts/carretilla.jpeg";
import overol from "../../assets/Images/constructionProducts/overol.jpeg";


const LandingPage = () => {

    let products = [
        { name: "Casco", image: casco, price: 85000 },
        { name: "Pala", image: pala, price: 75000 },
        { name: "Pica", image: pica, price: 185000 },
        { name: "Carretilla", image: carretilla, price: 585000 },
        { name: "Overol", image: overol, price: 58000 }
    ];

    let categories = [
        { icon: "icon-all", name: "Todas" },
        { icon: "icon-pipe", name: "Tubería" },
        { icon: "icon-concrete", name: "Cementos" },
        { icon: "icon-machinery", name: "Maquinaria" },
        { icon: "icon-coveralls", name: "Dotación" }
    ]

    // Para el Search Bar ----------------------------------
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const clearSearchBar = () => {
        setInputValue('');
    };
    // -----------------------------------------------------

    return (
        <div className={classes.LandingPageContainer}>
            <div className={classes.LandingPageHeader}>
                <div className={classes.LandingPageHeaderIcon} >
                    <img src={logo} alt="logo" height="50px" />
                    <div className={classes.LandingPageHeaderIconText} >
                        <div>ercado</div>
                        <div>ivil</div>
                    </div>
                </div>
                <div className={classes.inputWithIcon}>
                    <TextField
                        placeholder="Buscar un producto ..."
                        id="outlined-basic"
                        variant="outlined"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <div className={classes.xIcon}>
                        <i className="icon-x" onClick={clearSearchBar}></i>
                    </div>
                </div>
                <div className={classes.contactUs}>Contactenos</div>
                <Tooltip title="Carrito de compras" placement="bottom" arrow>
                    <div className={classes.shoppingCartIcon}>
                        <i className="icon-shopping-cart" ></i>
                    </div>
                </Tooltip>
                <Tooltip title="Menu" placement="bottom" arrow>
                    <div className={classes.menu}>
                        <i className="icon-align-justify" ></i>
                    </div>
                </Tooltip>
            </div>
            <div className={classes.LandingPageBody}>
                <div className={classes.selectorContainer}>
                    <div className={classes.categoriesContainer}>
                        <div className={classes.categoriesText} >Categorías</div>
                        <Each of={categories} render={(item, index) =>
                            <div className={classes.categoriesIconAndText}>
                                <div className={item.icon}></div>
                                <div className={classes.selectCategory} >{item.name}</div>
                            </div>
                        } />
                    </div>
                </div>
                <div className={classes.productsContainer}>
                    <div>Productos: </div>
                    <div className={classes.productsDisplay}>
                        <Each of={products} render={(item, index) =>
                            <div className={classes.productCard}>
                                <img src={item.image} alt={item.image} height="180px" />
                            </div>
                            // <div>{index + 1}</div>
                        } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;