'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCarritoContext } from '@/context/carritoContext';
import formStyles from '@/styles/form.module.css';
import styles from '@/styles/guitarra.module.css';

const GuitarraByUrl = ({ guitarra }) => {
	const [cantidad, setCantidad] = useState(0);
	const [error, setError] = useState('');
	const router = useRouter();

	const { agregarCarrito } = useCarritoContext();

	const {
		nombre,
		descripcion,
		precio,
		imagen: {
			data: {
				attributes: {
					formats: {
						medium: { url: imagenUrl },
					},
				},
			},
		},
	} = guitarra[0]?.attributes;
	const descripcionText = descripcion[0]?.children[0]?.text;

	const handleSubmit = e => {
		e.preventDefault();

		if (!cantidad) {
			setError('La cantidad debe ser mayor a 0');
			return;
		}
		setError('');

		const guitarraSeleccionada = {
			id: guitarra[0].id,
			imagenUrl,
			nombre,
			precio,
			cantidad,
		};

		agregarCarrito(guitarraSeleccionada);
		router.push('/tienda');
	};

	return (
		<main className={styles.guitarra__contenedor}>
			<div className={styles.guitarra}>
				<Image src={imagenUrl} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

				<div className={styles.contenido}>
					<h3>{nombre}</h3>
					<p className={styles.descripcion}>{descripcionText}</p>
					<p className={styles.precio}>{precio} €</p>
				</div>
			</div>

			<form className={formStyles.form} onSubmit={handleSubmit}>
				<div>
					<label className={formStyles.label} htmlFor="cantidad">
						Cantidad
					</label>

					<select
						id="cantidad"
						onChange={e => setCantidad(+e.target.value)}
						value={cantidad}
						className={formStyles.form__select}
					>
						<option value="0"> --Seleccione --</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>

				<input type="submit" value="Agregar al carrito" className={formStyles.form__submit} />
				{error && <p className={formStyles.form__error}> {error} </p>}
			</form>
		</main>
	);
};
export default GuitarraByUrl;
