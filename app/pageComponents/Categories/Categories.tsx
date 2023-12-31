'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import { CategoryEnum, ITopic } from '@/app/types';
import { Button } from '@/app/components';
import { RightChevron } from '@/app/icons';
import { BERoutes, FERoutes } from '@/app/consts';

import Topic from './Topic';
import styles from './Categories.module.scss';

const Categories = () => {
	const router = useRouter();
	const [topics, setTopics] = useState([
		{
			id: '0',
			title: 'Loading...',
			tags: ['Loading...'],
			category: CategoryEnum.All,
		},
	]);
	const [selectedTab, setSelectedTab] =
		useState<CategoryEnum>(CategoryEnum.All);
	useEffect(() => {
		const fetchData = async () => {
			const topics = await axios.get(BERoutes.TOPICS);
			setTopics(topics.data?.topics);
		};
		fetchData();
	}, []);

	const handleTabChange = (e: any) => {
		setSelectedTab(e.target.innerText.toLowerCase());
	};

	const handleAddTopic = () => {
		router.push(FERoutes.ADD_TOPIC);
	};

	const handleDeleteTopic = async (id: string) => {
		try {
			const res = await axios.delete(
				`${BERoutes.TOPICS}/${id}`
			);
			setTopics(res.data);
			router.push(FERoutes.HOME);
		} catch (err) {
			console.log(err);
		}
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
			<div>
				<div
					className={`px-4 py-2 ${styles['card__header']}`}
				>
					{selectedTab.toLowerCase() ===
					CategoryEnum.Custom.toLowerCase()
						? 'Your Topics'
						: "Speedy's Recommendations"}
				</div>
				{topics.map((topic: ITopic) => {
					if (
						topic.category.toLowerCase() !==
							selectedTab.toLowerCase() &&
						selectedTab.toLowerCase() !==
							CategoryEnum.All.toLowerCase()
					) {
						return null;
					}

					return (
						<Topic
							key={topic.id}
							id={topic.id}
							name={topic.title}
							tags={topic.tags}
							handleDelete={handleDeleteTopic}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Categories;
