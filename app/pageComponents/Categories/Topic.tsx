'use client';
import React from 'react';
import styles from './Categories.module.scss';
import { Button, CustomTag } from '@/app/components';
import { Delete, RightChevron } from '@/app/icons';
import { useRouter } from 'next/navigation';

interface Props {
	id: string;
	name: string;
	tags: string[];
}

const Topic: React.FC<Props> = ({ name, tags, id }) => {
	const router = useRouter();
	const handleEdit = () => {
		router.push(`/edit/${id}`);
	};
	return (
		<div className={styles['topic']}>
			<div className=''>
				<p className={styles['topic__name']}>{name}</p>
				<div
					className={`mt-3 hstack gap-2 ${styles['topic__tags']}`}
				>
					{tags.map((tag, index) => {
						return (
							<CustomTag
								key={index}
								className={styles['topic__tag']}
								value={tag}
							/>
						);
					})}
				</div>
			</div>
			<div className={'d-flex gap-2 align-items-center'}>
				<Button
					theme='primary'
					className='m-auto align-items-center justify-content-center hstack p-3'
					onClick={handleEdit}
				>
					Write <RightChevron height={25} width={25} />
				</Button>
				<div className={styles['delete']}>
					<Delete />
				</div>
			</div>
		</div>
	);
};

export default Topic;
