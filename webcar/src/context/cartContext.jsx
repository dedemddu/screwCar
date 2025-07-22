import { createContext, useState, useEffect } from "react";
import { getStorage, saveStorage } from "../utils/localStorage";


const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addRepuestoToCart = (unidadrpto) => {
        const existsRepuesto = cart.findIndex((rpto) => rpto.id === unidadrpto.id);
        if (existsRepuesto === -1) {
            unidadrpto.cantidad = 1;
            const newCart = [...cart, unidadrpto];
            setCart(newCart);
        }else {
            const copyCart = [...cart];
            copyCart[existsRepuesto].cantidad++;
            setCart(copyCart);
        }
    }

    const cantidadTotal = cart.reduce((acumulator, rpto) => acumulator + rpto.cantidad, 0);

    useEffect(() =>{
        const dataStorage = getStorage('cart');
        console.log({ dataStorage });
        if(dataStorage){
            setCart(dataStorage);
        }
    },[])

    useEffect(() => {
        if(cart.length > 0){
            saveStorage('cart', cart); 
        }
    }, [cart]);

    return <CartContext.Provider value={{cart, addRepuestoToCart, cantidadTotal}}>
            {props.children}
        </CartContext.Provider>
    
}

export {
    CartContext,
    CartContextProvider
}