import Post from '@/components/Post';
import { getPosts } from '@/data/getPosts';
import styles from '@/styles/grid.module.css';

export const metadata = {
	title: 'Guitar - Blog',
	description: 'Nuestro blog',
};

const page = async () => {
	const posts = await getPosts();

	return (
		<main className="contenedor">
			<h1 className="heading">Blog</h1>
			<div className={styles.grid}>
				{posts?.map(post => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</main>
	);
};
export default page;
