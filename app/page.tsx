import styles from './page.module.scss';
import { Categories } from './components';

export default function Home() {
	return (
		<main className={styles.main}>
			<Categories />
		</main>
	);
}
