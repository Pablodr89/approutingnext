'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../styles/header.module.css';

const Header = () => {
	const router = useRouter();

	return (
		<header className={styles.header}>
			<div className={`contenedor ${styles.barra}`}>
				<Link href={'/'}>
					<Image src="/img/logo.svg" width={300} height={40} alt="imagen logotipo" />
				</Link>

				<nav className={styles.navegacion}>
					<Link href="/" className={router.pathname === '/' ? styles.active : ''}>
						Inicio
					</Link>

					<Link href="/nosotros" className={router.pathname === '/nosotros' ? styles.active : ''}>
						Nosotros
					</Link>

					<Link href="/tienda" className={router.pathname === '/tienda' ? styles.active : ''}>
						Tienda
					</Link>

					<Link href="/blog" className={router.pathname === '/blog' ? styles.active : ''}>
						Blog
					</Link>

					<Link href={'/carrito'} className={router.pathname === '/carrito' ? 'active' : ''}>
						<Image src="/img/carrito.png" alt="Imagen del carrito" title="Imagen del carrito" width={30} height={25} />
					</Link>
				</nav>
			</div>
		</header>
	);
};
export default Header;
