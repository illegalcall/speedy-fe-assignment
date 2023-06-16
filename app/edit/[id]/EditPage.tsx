'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './EditPage.module.scss';
import { Button } from '@/app/components';
import { Edit, Preview, RightChevron } from '@/app/icons';

interface Props {
	id: string;
}

const EditPage: React.FC<Props> = ({ id }) => {
	const [topic, setTopic] = useState({
		id: '0',
		title: 'Loading...',
		tags: ['Loading...'],
	});

	const [showDropdown, setShowDropdown] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const topic = await axios.get(
				`http://localhost:3000/api/topics/${id}`
			);
			setTopic(topic.data);
		};
		fetchData();
	}, []);

	return (
		<div className={styles['container']}>
			<div className={styles['editor']}>
				<div className={styles['blog-title']}>
					{topic.title}
				</div>
			</div>
			<div className={`${styles['generate']}`}>
				<div
					className={`${styles['generate__btn-container']}`}
				>
					<Button
						theme='primary'
						className='p-3'
						leftIcon={<Edit />}
					>
						Edit
					</Button>
					<Button
						theme='secondary'
						className='p-3'
						leftIcon={<Preview />}
					>
						Edit
					</Button>
				</div>
				<div className={styles['choose-tone']}>
					<span className='mx-1'>Tone:</span>
					<select name='' id='' placeholder='Choose Tone'>
						<option value=''>Formal</option>
						<option value=''>Informal</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default EditPage;
