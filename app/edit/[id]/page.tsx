'use client';

import { useRouter } from 'next/navigation';

import EditPage from './EditPage';
import { LeftChevron } from '@/app/icons';
import { FERoutes } from '@/app/consts';

import styles from './EditPage.module.scss';

const Edit = async ({
	params,
}: {
	params: { id: string };
}) => {
	const router = useRouter();

	return (
		<div>
			<div
				className={`hstack p-2 pt-3 pb-4 ${styles['header']}`}
				onClick={() => {
					router.push(FERoutes.HOME);
				}}
			>
				<LeftChevron height={30} width={30} />
				<div
					className={`fs-5 fw-semibold ${styles['title']}`}
				>
					Edit & Publish
				</div>
			</div>
			<EditPage id={params.id} />
		</div>
	);
};
export default Edit;
