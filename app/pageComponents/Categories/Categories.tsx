'use client';
import React, { useEffect, useState } from 'react';
import Topic from './Topic';
import axios from 'axios';
import { CategoryEnum, ITopic } from '@/app/types';
import styles from './Categories.module.scss';
import { Button } from '@/app/components';
import { RightChevron } from '@/app/icons';
import { useRouter } from 'next/navigation';

const Categories = () => {
	const router = useRouter();
	const [topics, setTopics] = useState([
		{
			id: '0',
			title: 'Loading...',
			tags: ['Loading...'],
			category: CategoryEnum.Custom,
		},
	]);
	const [selectedTab, setSelectedTab] =
		useState<CategoryEnum>(CategoryEnum.Custom);
	useEffect(() => {
		const fetchData = async () => {
			const topics = await axios.get('/api/topics');
			setTopics(topics.data?.topics);
		};
		fetchData();
	}, []);

	const handleTabChange = (e: any) => {
		console.log('tab changed', e.target.innerText);
		setSelectedTab(e.target.innerText.toLowerCase());
	};

	const handleAddTopic = () => {
		router.push('/add_topic');
	};

	return (
		<div>
			<div className='my-4 py-2'>
				<h3 className='fw-semibold fs-5'>Categories</h3>
			</div>
			<div
				className={`d-flex justify-content-between my-4 ${styles['categories-tabs']}`}
			>
				<div className='hstack gap-5'>
					{Object.keys(CategoryEnum).map((category) => {
						return (
							<div
								key={category}
								className={`fw-bold ${
									styles['category-tab']
								} ${
									selectedTab.toLowerCase() ===
									category.toLowerCase()
										? styles['active']
										: ''
								}`}
								onClick={handleTabChange}
							>
								{category}
							</div>
						);
					})}
				</div>
				<Button className='p-3' onClick={handleAddTopic}>
					<span className='d-flex align-items-center'>
						Add Topic{' '}
						<RightChevron height={28} width={28} />
					</span>
				</Button>
			</div>
			{topics.map((topic: ITopic) => {
				if (
					topic.category.toLowerCase() !==
					selectedTab.toLowerCase()
				) {
					return null;
				}
				return (
					<Topic
						key={topic.id}
						id={topic.id}
						name={topic.title}
						tags={topic.tags}
					/>
				);
			})}
		</div>
	);
};

export default Categories;
