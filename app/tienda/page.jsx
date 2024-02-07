import Guitarra from '@/components/guitarra';
import styles from '@/styles/grid.module.css';
import { getGuitarras } from '@/data/getGuitarras';

export const metadata = {
	title: 'Guitar - Tienda',
	description: 'Nuestra tienda',
};

const page = async () => {
	const guitarras = await getGuitarras();

	return (
		<main className="contenedor">
			<h1 className="heading">Nuestra Colección</h1>

			<div className={styles.grid}>
				{guitarras.map(guitarra => (
					<Guitarra key={guitarra.id} guitarra={guitarra} />
				))}
			</div>
		</main>
	);
};
export default page;
