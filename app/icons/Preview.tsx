import React from 'react';

export const Preview: React.FC<
	React.SVGProps<SVGSVGElement>
> = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			stroke='currentColor'
			fill='currentColor'
			strokeWidth='0'
			viewBox='0 0 24 24'
			height='1em'
			width='1em'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: '22px', height: 'auto' }}
			{...props}
		>
			<path fill='none' d='M0 0h24v24H0z'></path>
			<path d='M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm0 16H5V7h14v12zm-5.5-6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 6.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z'></path>
		</svg>
	);
};
