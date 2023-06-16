import React from 'react';
import Topic from './Topic';

const Categories = () => {
	return (
		<div>
			<div className=''>Categories</div>
			<Topic name={'Topic1'} tags={['helo', 'mellow']} />
			<Topic name={'Topic2'} tags={['helo', 'mellow']} />
			<Topic name={'Topic3'} tags={['helo', 'mellow']} />
			<Topic name={'Topic4'} tags={['helo', 'mellow']} />
			<Topic name={'Topic5'} tags={['helo', 'mellow']} />
		</div>
	);
};

export default Categories;
