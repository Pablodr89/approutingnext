'use client';
import Image from 'next/image';
import Link from 'next/link';
import { formatearFecha } from '@/helpers/formatearFecha';
import styles from '../styles/blog.module.css';

const Post = ({ post }) => {
	const {
		titulo,
		contenido,
		publishedAt,
		url,
		imagen: {
			data: {
				attributes: { url: imagenUrl },
			},
		},
	} = post.attributes;
	const contenidoText = contenido[0]?.children[0]?.text;

	return (
		<article>
			<Image src={imagenUrl} width={600} height={400} alt={`imagen blog ${titulo}`} />

			<div className={styles.contenido}>
				<h3>{titulo}</h3>
				<p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
				<p className={styles.resumen}>{contenidoText}</p>
				<Link href={`/blog/${url}`} className={styles.enlace}>
					Leer Post
				</Link>
			</div>
		</article>
	);
};
export default Post;
