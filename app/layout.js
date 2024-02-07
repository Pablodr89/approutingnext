import '@/styles/globals.css';
import '@/styles/normalize.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CarritoProvider } from '@/context/carritoContext';

export const metadata = {
	title: 'Guitar - Inicio',
	description: 'Tienda de guitarras, blog y cursos',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				<CarritoProvider>{children}</CarritoProvider>
				<Footer />
			</body>
		</html>
	);
}
