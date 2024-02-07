import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/guitarras.module.css';

const Guitarra = ({ guitarra }) => {
	console.log(guitarra.attributes);
	const {
		nombre,
		imagen: {
			data: {
				attributes: {
					formats: {
						medium: { url: imagenUrl },
					},
				},
			},
		},
		descripcion,
		precio,
		url,
	} = guitarra.attributes;
	const descripcionText = descripcion[0]?.children[0]?.text;

	return (
		<div className={styles.guitarra}>
			<Image src={imagenUrl} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

			<div className={styles.contenido}>
				<h3>{nombre}</h3>
				<p className={styles.descripcion}>{descripcionText}</p>
				<p className={styles.precio}>{precio} €</p>
				<Link href={`/guitarras/${url}`} className={styles.enlace}>
					Ver Producto
				</Link>
			</div>
		</div>
	);
};
export default Guitarra;
