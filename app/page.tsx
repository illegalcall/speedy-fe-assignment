import styles from './page.module.scss';
import { Categories } from './pageComponents';

export default function Home() {
	return (
		<main
			className={`mt-4 mx-3 container-fluid ${styles.main}`}
		>
			<Categories />
		</main>
	);
}
