'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCarritoContext } from '@/context/carritoContext';
import { euroFormatter } from '@/helpers/euroFormatter';
import styles from '@/styles/carrito.module.css';

const Carrito = () => {
	const { carrito, actualizarCantidad, eliminarProducto } = useCarritoContext();
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const totalAcumulado = carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
		setTotal(totalAcumulado);
	}, [carrito]);

	return (
		<div className={styles.carrito__contenido}>
			<section className={styles.carrito__articulos}>
				<h3>Articulos</h3>

				{carrito.map(articulo => (
					<div className={styles.articulo} key={articulo.id}>
						<Image
							src={articulo.imagenUrl}
							width={400}
							alt={`Imagen de la guitarra ${articulo.nombre}`}
							title={`Imagen de la guitarra ${articulo.nombre}`}
							height={700}
							className={styles.imagen}
						/>

						<aside className={styles.articulo__contenido}>
							<h2 className={styles.articulo__heading}>{articulo.nombre}</h2>

							<div className={styles.articulo__cantidad}>
								<p>Cantidad</p>
								<select
									value={articulo.cantidad}
									onChange={e =>
										actualizarCantidad({
											id: articulo.id,
											cantidad: e.target.value,
										})
									}
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>

							<p className={styles.articulo__precio}> {euroFormatter(articulo.precio)} </p>
							<p className={styles.articulo__subtotal}>
								Subtotal: <span> {euroFormatter(articulo.cantidad * articulo.precio)} </span>
							</p>
						</aside>

						<button type="button" className={styles.eliminar} onClick={() => eliminarProducto(articulo.id)}>
							X
						</button>
					</div>
				))}
			</section>

			<aside className={styles.carrito__resumen}>
				<h3>Resumen del pedido</h3>
				{carrito.length ? <p>Total a pagar: {euroFormatter(total)}</p> : <p>El carrito esta vacio</p>}
			</aside>
		</div>
	);
};
export default Carrito;
