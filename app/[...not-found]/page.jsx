import Image from 'next/image';
import '@/styles/globals.css';
import styles from '/styles/notFound.module.css';

export default function NotFoundCatchAll() {
	return (
		<main className={styles.notFound}>
			<div className="not-found__contenido">
				<Image
					src={'./img/icons8-error.svg'}
					width={500}
					height={500}
					alt="Icono de error (página no encontrada)"
					title="Icono de error (página no encontrada)"
					className={styles.notFFound__image}
				/>
				<h1>Error 404</h1>
				<p>No hemos encontrado la página que estas buscando</p>
			</div>
		</main>
	);
}
