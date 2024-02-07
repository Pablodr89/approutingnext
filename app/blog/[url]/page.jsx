import Image from 'next/image';
import { formatearFecha } from '@/helpers/formatearFecha';
import styles from '@/styles/blog.module.css';
import { getPostByUrl } from '@/data/getPosts';

const page = async ({ params: { url: urlParam } }) => {
	const post = await getPostByUrl(urlParam);

	if (post.length === 0) {
		return <p>El blog no existe</p>;
	}

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
	} = post[0]?.attributes;
	const descripcionText = contenido[0]?.children[0]?.text;

	return (
		<article className={`${styles.post} ${styles['mt-3']}`}>
			<Image src={imagenUrl} width={1000} height={600} alt={`imagen blog ${titulo}`} />

			<div className={styles.contenido}>
				<h3>{titulo}</h3>
				<p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
				<p className={styles.texto}>{descripcionText}</p>
			</div>
		</article>
	);
};
export default page;
