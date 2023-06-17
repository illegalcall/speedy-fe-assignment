'use client';

import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

const Editor = ({ content = '' }) => {
	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			[
				'bold',
				'italic',
				'underline',
				'strike',
				'blockquote',
			],
			[{ size: [] }],
			[{ font: [] }],
			[{ align: ['right', 'center', 'justify'] }],
			[{ list: 'ordered' }, { list: 'bullet' }],
			['link', 'image'],
			//TODO: add color picker
			[{ color: ['red', '#785412'] }],
			[{ background: ['red', '#785412'] }],
		],
	};

	const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'link',
		'color',
		'image',
		'background',
		'align',
		'size',
		'font',
	];

	const [code, setCode] = useState('default content');

	useEffect(() => {
		setCode(content);
	}, [content]);

	const handleProcedureContentChange = (
		content: string
	) => {
		setCode(content);
	};
	return (
		<div className='mx-5 my-4'>
			<ReactQuill
				theme='snow'
				modules={modules}
				formats={formats}
				value={code}
				onChange={handleProcedureContentChange}
				placeholder='Generate your blog...'
			/>
		</div>
	);
};

export default Editor;
