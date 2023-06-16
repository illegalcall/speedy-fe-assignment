import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './layout.module.scss';
import { Inter } from 'next/font/google';
import { LeftDrawer } from './components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${styles['container']} ${inter.className}`}
			>
				<LeftDrawer />
				<div className={styles['children']}>{children}</div>
			</body>
		</html>
	);
}
