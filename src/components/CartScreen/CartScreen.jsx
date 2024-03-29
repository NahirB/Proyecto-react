import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import "./CartScreen.css";

export const CartScreen = () => {
    const { carrito, precioTotal, removerItem, vaciarCarrito } =
    useContext(CartContext);

    return (
    <div className="container my-5">
    {carrito.length === 0 ? (
        <>
        <h3>Carrito vacio</h3>
        <hr />
        <Link to="/" className="btn btn-success">
            {" "}
            Volver a comprar
        </Link>
        </>
    ) : (
        <>
        <h3>Resumen de compras</h3>
        <hr />
        {carrito.map((prod) => (
            <>
                <div className="listado">
                <p>Producto: {prod.description}</p>
                <p>${prod.price}</p>
                <p>cantidad: {prod.counter}</p>
                </div>
                <Button onClick={() => removerItem(prod.id)}>
                <BsFillTrashFill />
                </Button>
            </>
        ))}
            <hr />
            <strong>Precio total: $ {precioTotal()}</strong>
            <hr />
            <Button className="btn btn-danger" onClick={vaciarCarrito}>
            {" "}
            Vaciar Carrito{" "}
            </Button>
            <Link className="btn btn-success" to="/checkout">
            Terminar compra
            </Link>
        </>
    )}
    </div>
    );
};
