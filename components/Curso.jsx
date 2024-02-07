'use client';
import styles from '@/styles/curso.module.css';

export const Curso = ({ curso }) => {
	const {
		titulo,
		descripcion,
		imagen: {
			data: {
				attributes: {
					formats: {
						large: { url: imagenUrl },
					},
				},
			},
		},
	} = curso;
	// const descripcionText = descripcion[0]?.children[0]?.text;
	const descripcionText = '';
	return (
		<section className={`${styles.curso} curso`}>
			<style jsx>{`
				.curso {
					background-image: linear-gradient(to right, rgb(0 0 0 / 0.65), rgb(0 0 0 / 0.7)), url(${imagenUrl});
				}
			`}</style>
			<div className={`contenedor ${styles.grid}`}>
				<div className={styles.contenido}>
					<h2 className="heading">{titulo}</h2>
					<p>{descripcionText}</p>
				</div>
			</div>
		</section>
	);
};
