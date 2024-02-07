'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CarritoContext = createContext();

export const useCarritoContext = () => {
	return useContext(CarritoContext);
};

export const CarritoProvider = ({ children }) => {
	//Esto arregla el problema de que localStorage se use en el cliente y no en servidor
	const localStorageValues = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : [];

	const [carrito, setCarrito] = useState(localStorageValues);
	const [paginaLista, setPaginaLista] = useState(false);

	//Esto arregla la hidratacion de next
	useEffect(() => {
		setPaginaLista(true);
	}, []);

	useEffect(() => {
		localStorage.setItem('carrito', JSON.stringify(carrito));
	}, [carrito]);

	const agregarCarrito = guitarra => {
		// Comprobar si la guitarra ya esta en el carrito...
		if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
			// Iterar para actualizar la cantidad
			const carritoActualizado = carrito.map(guitarraState => {
				if (guitarraState.id === guitarra.id) {
					guitarraState.cantidad = guitarra.cantidad;
				}
				return guitarraState;
			});
			// Se asigna al array
			setCarrito([...carritoActualizado]);
			localStorage.setItem('carrito', JSON.stringify(carrito));
		} else {
			// En caso de que el articulo no exista, es nuevo y se agrega
			setCarrito([...carrito, guitarra]);
		}
	};

	const eliminarProducto = id => {
		const carritoActualizado = carrito.filter(producto => producto.id !== id);
		setCarrito(carritoActualizado);
	};

	const actualizarCantidad = guitarra => {
		const carritoActualizado = carrito.map(guitarraState => {
			if (guitarraState.id === guitarra.id) {
				guitarraState.cantidad = parseInt(guitarra.cantidad);
			}
			return guitarraState;
		});
		setCarrito(carritoActualizado);
	};

	return (
		<>
			{paginaLista ? (
				<CarritoContext.Provider
					value={{
						agregarCarrito,
						eliminarProducto,
						actualizarCantidad,
						carrito,
					}}
				>
					{children}
				</CarritoContext.Provider>
			) : null}
		</>
	);
};
