import styles from '@/styles/grid.module.css';
import { getGuitarras } from '@/data/getGuitarras';
import { getPosts } from '@/data/getPosts';
import Guitarra from '@/components/Guitarra';
import Post from '@/components/Post';
import Curso from '@/components/Curso';

const getCurso = async () => {
	const response = await fetch(`${process.env.API_URL}/api/curso?populate=imagen`);
	const { data } = await response.json();
	return data;
};

const Home = async () => {
	const guitarras = await getGuitarras();
	const posts = await getPosts();
	const curso = await getCurso();

	return (
		<>
			<main className="contenedor">
				<h1 className="heading">Nuestra Colección</h1>
				<div className={styles.grid}>
					{guitarras?.map(guitarra => (
						<Guitarra key={guitarra.id} guitarra={guitarra} />
					))}
				</div>
			</main>

			<Curso key={curso?.id} curso={curso?.attributes} />

			<section className="contenedor">
				<h2 className="heading">Blog</h2>

				<div className={styles.grid}>
					{posts?.map(post => (
						<Post key={post.id} post={post} />
					))}
				</div>
			</section>
		</>
	);
};
export default Home;
