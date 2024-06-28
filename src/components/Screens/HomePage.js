import React, { useState } from "react";
import classes from "./HomePage.module.scss";
import logo from "../../assets/Images/LandingPage/logoMercadoCivil.png";
import TextField from '@mui/material/TextField';

const LandingPage = () => {

    // let products = [
    //     { name: "Casco", image: casco, price: 85000 },
    //     { name: "Pala", image: pala, price: 75000 },
    //     { name: "Pica", image: pica, price: 185000 },
    //     { name: "Carretilla", image: carretilla, price: 585000 },
    //     { name: "Overol", image: overol, price: 58000 },
    //     { name: "Casco", image: casco, price: 85000 },
    //     { name: "Pala", image: pala, price: 75000 },
    //     { name: "Pica", image: pica, price: 185000 },
    //     { name: "Carretilla", image: carretilla, price: 585000 },
    //     { name: "Overol", image: overol, price: 58000 },
    //     { name: "Casco", image: casco, price: 85000 },
    //     { name: "Pala", image: pala, price: 75000 },
    //     { name: "Pica", image: pica, price: 185000 },
    //     { name: "Carretilla", image: carretilla, price: 585000 },
    //     { name: "Overol", image: overol, price: 58000 }
    // ];

    // let categories = [
    //     { icon: "icon-all", name: "Todas" },
    //     { icon: "icon-pipe", name: "Tubería" },
    //     { icon: "icon-concrete", name: "Cementos" },
    //     { icon: "icon-machinery", name: "Maquinaria" },
    //     { icon: "icon-coveralls", name: "Dotación" }
    // ]

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
                <div>Contactenos</div>
                <div>Carrito de compras</div>
                <div>Otro icono</div>
            </div>
        </div>
    )
}

export default LandingPage;