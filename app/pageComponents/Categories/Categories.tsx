'use client';
import React, { useEffect, useState } from 'react';
import Topic from './Topic';
import axios from 'axios';
import { ITopic } from '@/app/types';

const Categories = () => {
	const [topics, setTopics] = useState([
		{
			id: '0',
			title: 'Loading...',
			tags: ['Loading...'],
		},
	]);
	useEffect(() => {
		const fetchData = async () => {
			const topics = await axios.get('/api/topics');
			setTopics(topics.data?.topics);
		};
		fetchData();
	}, []);

	return (
		<div>
			<div className=''>Category</div>
			{topics.map((topic: ITopic) => {
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
