import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';


const ProductDialog = ({ product, open, handleClose }) => {

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{product.name}</DialogTitle>
            <DialogContent>
                <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                <p>Equipo de {product.equipment}</p>
                <p>Ítem {product.serial}</p>
                <p>COP {product.price}</p>
                {/* Otro contenido del diálogo si es necesario */}
            </DialogContent>
            <DialogActions>
                <button onClick={handleClose}>Cerrar</button>
                {/* Otros botones de acciones si es necesario */}
            </DialogActions>
        </Dialog>
    );
};

export default ProductDialog;
