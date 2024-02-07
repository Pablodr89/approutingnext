import { getGuitarrasByUrl } from '@/data/getGuitarras';
import GuitarraByUrl from '@/components/GuitarraByUrl';
import styles from '@/styles/guitarra.module.css';

const page = async ({ params: { url } }) => {
	const guitarra = await getGuitarrasByUrl(url);

	return (
		<>
			{guitarra.length === 0 ? (
				<>
					<main className={styles.guitarra__error}>
						<p>La guitarra no exite</p>
					</main>
				</>
			) : (
				<>
					<GuitarraByUrl guitarra={guitarra} />
				</>
			)}
		</>
	);
};
export default page;
