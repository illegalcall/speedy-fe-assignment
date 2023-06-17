'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/app/components';
import { Edit, Preview, RightChevron } from '@/app/icons';
import { BERoutes } from '@/app/consts';

import Editor from './Editor';
import { toneOptions } from './consts';
import styles from './EditPage.module.scss';

interface Props {
	id: string;
}

const EditPage: React.FC<Props> = ({ id }) => {
	const [topic, setTopic] = useState({
		id: '0',
		title: 'Loading...',
		tags: ['Loading...'],
	});
	const [tone, setTone] = useState('serious');
	const [blog, setBlog] = useState('');
	const handleOptionChange = (e: any) => {
		setTone(e.target.value);
	};

	useEffect(() => {
		const fetchData = async () => {
			const topic = await axios.get(
				`${BERoutes.TOPICS}/${id}`
			);
			setTopic(topic.data);
		};
		fetchData();
	}, []);

	const handleBlogGenerate = async () => {
		const blog = await axios.post(BERoutes.BLOG, {
			title: topic.title,
			tone: tone,
		});
		setBlog(blog.data.content);
	};

	return (
		<div className={styles['container']}>
			<div className={styles['editor']}>
				<div className={styles['blog-title']}>
					<h4 className='d-flex justify-content-center fw-bold fs-4 my-4'>
						{topic.title}
					</h4>
				</div>
				<Editor content={blog} />
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
					<select
						name='tone-choose'
						id='tone'
						placeholder='Choose Tone'
						value={tone}
						onChange={handleOptionChange}
					>
						{toneOptions.map((tone) => {
							return (
								<option
									id={tone.value}
									key={tone.value}
									value={tone.value}
								>
									{tone.label}
								</option>
							);
						})}
					</select>
				</div>
				<div className='mt-5 d-flex justify-content-center'>
					<Button
						className='py-3 px-4'
						onClick={handleBlogGenerate}
					>
						<span className='fw-semibold'>
							Generate Blog
						</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default EditPage;
