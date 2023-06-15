import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
	return (
		<main className={styles.main}>
			<p className={`${styles.para} mt-5 ms-5`}>
				Hello from Speedy
			</p>
		</main>
	);
}
