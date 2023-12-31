'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import { LeftChevron, RightChevron } from '@/app/icons';
import { BERoutes, FERoutes } from '../consts';

import { Button } from '../components';
import styles from './AddTopic.module.scss';

const AddTopicPage = () => {
	const router = useRouter();
	const [createTopicData, setCreateTopicData] = useState({
		title: '',
		keywords: '',
	});

	const handleAddTopic = async (e: any) => {
		e.preventDefault();
		try {
			await axios.post(BERoutes.TOPICS, createTopicData);
			router.push(FERoutes.HOME);
		} catch (error) {
			console.log('error', error);
		}
	};

	return (
		<div className={`m-2 ${styles['container']}`}>
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
					Add Your Own Topics
				</div>
			</div>
			<div className={`${styles['card']}`}>
				<div
					className={`px-4 py-2 fw-semibold ${styles['card__header']}`}
				>
					Create content with your own topic
				</div>
				<form onSubmit={handleAddTopic}>
					<div
						className={`${styles['add-topic']} hstack gap-4`}
					>
						<div className='vstack gap-3'>
							<p
								className={`${styles['add-topic__form-label']}`}
							>
								Title of your Topic
							</p>
							<input
								className={`${styles['add-topic__form-input']}`}
								placeholder='Topic Title'
								value={createTopicData.title}
								onChange={(e) => {
									setCreateTopicData((t) => {
										return {
											...t,
											title: e.target.value,
										};
									});
								}}
							/>
						</div>
						<div className='vstack gap-3'>
							<p
								className={`${styles['add-topic__form-label']}`}
							>
								Keywords
							</p>
							<input
								className={`${styles['add-topic__form-input']}`}
								placeholder='Enter keywords separated by commas'
								value={createTopicData.keywords}
								onChange={(e) => {
									setCreateTopicData((t) => {
										return {
											...t,
											keywords: e.target.value,
										};
									});
								}}
							/>
						</div>
					</div>
					<Button
						className={`p-3 ${styles['create_topic']}`}
						type='submit'
					>
						Create Topic{' '}
						<RightChevron height={28} width={28} />
					</Button>
				</form>
			</div>
		</div>
	);
};

export default AddTopicPage;
