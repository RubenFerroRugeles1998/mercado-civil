import React, { useState } from "react";
import classes from "./LandingPage.module.scss";
import logo from "../../assets/Images/LandingPage/whiteLogo.jpg";
import { Each } from '../Utils/Each';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
// ---------------------------------------------------------------------------------------------------
import casco from "../../assets/Images/constructionProducts/casco.jpeg";
import overol from "../../assets/Images/constructionProducts/overol.jpeg";
import botas from "../../assets/Images/constructionProducts/botas.jpeg";
import guantes from "../../assets/Images/constructionProducts/guantes.jpg";
import pala from "../../assets/Images/constructionProducts/pala.jpg";
import pica from "../../assets/Images/constructionProducts/pica.jpeg";
import carretilla from "../../assets/Images/constructionProducts/carretilla.jpeg";
import martillo from "../../assets/Images/constructionProducts/martillo.jpeg";
import pvc from "../../assets/Images/constructionProducts/pcv.jpeg";
import conduit from "../../assets/Images/constructionProducts/conduit.jpeg";
import cpvc from "../../assets/Images/constructionProducts/cpvc.jpeg";
import polipropileno from "../../assets/Images/constructionProducts/polipropileno.jpg";
import cementoTipo1 from "../../assets/Images/constructionProducts/cementoTipo1.jpg";
import cementoTipo2 from "../../assets/Images/constructionProducts/cementoTipo2.jpeg";
import cementoTipo3 from "../../assets/Images/constructionProducts/cementoTipo3.jpeg";
import cementoTipo4 from "../../assets/Images/constructionProducts/cementoTipo4.jpeg";

const LandingPage = () => {

    let products = [
        { name: "Casco", image: casco, price: 85000, equipment: "Dotación", serial: 111111 },
        { name: "Overol", image: overol, price: 58000, equipment: "Dotación", serial: 111112 },
        { name: "Botas", image: botas, price: 58000, equipment: "Dotación", serial: 111113 },
        { name: "Guantes", image: guantes, price: 58000, equipment: "Dotación", serial: 111114 },
        // ---------------------------------------------------------------------------------------------------
        { name: "Pala", image: pala, price: 75000, equipment: "Herramienta", serial: 211111 },
        { name: "Pica", image: pica, price: 185000, equipment: "Herramienta", serial: 211112 },
        { name: "Carretilla", image: carretilla, price: 585000, equipment: "Herramienta", serial: 211113 },
        { name: "Martillo", image: martillo, price: 585000, equipment: "Herramienta", serial: 211114 },
        // ---------------------------------------------------------------------------------------------------
        { name: "PVC", image: pvc, price: 585000, equipment: "Tubería", serial: 311111 },
        { name: "Conduit", image: conduit, price: 585000, equipment: "Tubería", serial: 311112 },
        { name: "CPV", image: cpvc, price: 585000, equipment: "Tubería", serial: 311113 },
        { name: "Polipropileno", image: polipropileno, price: 585000, equipment: "Tubería", serial: 311114 },
        // ---------------------------------------------------------------------------------------------------
        { name: "Cemento tipo 1", image: cementoTipo1, price: 585000, equipment: "Cementos", serial: 411111 },
        { name: "Cemento tipo 2", image: cementoTipo2, price: 585000, equipment: "Cementos", serial: 411112 },
        { name: "Cemento tipo 3", image: cementoTipo3, price: 585000, equipment: "Cementos", serial: 411113 },
        { name: "Cemento tipo 4", image: cementoTipo4, price: 585000, equipment: "Cementos", serial: 411114 },
        // ---------------------------------------------------------------------------------------------------
    ];

    let categories = [
        { icon: "icon-all", name: "Todos" },
        { icon: "icon-coveralls", name: "Dotación" },
        { icon: "icon-tool", name: "Herramienta" },
        { icon: "icon-pipe", name: "Tubería" },
        { icon: "icon-concrete", name: "Cementos" },
        { icon: "icon-machinery", name: "Maquinaria" },
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

    // Para el Selected Category --------------------------------------
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
    };

    const filteredProducts = selectedCategory === 'Todos'
        ? products.filter(product =>
            product.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        : products.filter(product =>
            product.equipment === selectedCategory &&
            product.name.toLowerCase().includes(inputValue.toLowerCase())
        );
    // ----------------------------------------------------------------

    return (
        <div className={classes.LandingPageContainer}>
            <div className={classes.LandingPageHeader}>
                <div className={classes.LandingPageHeaderIcon} >
                    <img src={logo} alt="logo" height="50px" />
                    <div className={classes.LandingPageHeaderIconText} >
                        <div className={classes.ercadoText}>ercado</div>
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
                            <div className={classes.categoriesIconAndText} onClick={() => handleCategoryClick(item.name)}>
                                <div className={item.icon}></div>
                                <div className={`${classes.selectCategory} ${selectedCategory === item.name ? classes.selectedCategory : ''}`} >{item.name}</div>
                            </div>
                        } />
                    </div>
                </div>
                <div className={classes.productsContainer}>
                    <div className={classes.productsText}>Productos: {selectedCategory}</div>
                    {filteredProducts.length === 0 ? (
                        <div className={classes.anyProductAvailable} >No hay productos disponibles</div>
                    ) :
                        <div className={classes.productsDisplay}>
                            <Each of={filteredProducts} render={(item, index) =>
                                <div className={classes.completeProduct}>
                                    <div className={classes.productCard}>
                                        <img src={item.image} alt={item.image} height="180px" />
                                    </div>
                                    <div className={classes.productDescription}>
                                        <div className={classes.equipmentText}>Equipo de {item.equipment}</div>
                                        <div className={classes.productName}>{item.name}</div>
                                        <div>ítem {item.serial}</div>
                                        <div className={classes.copText}>COP {item.price}</div>
                                    </div>
                                </div>
                            } />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default LandingPage;