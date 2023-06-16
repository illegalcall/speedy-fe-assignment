import React from 'react';

export const RightChevron: React.FC<
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
			{...props}
		>
			<path fill='none' d='M0 0h24v24H0z'></path>
			<path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path>
		</svg>
	);
};

{
	/* <svg
	stroke='currentColor'
	fill='currentColor'
	strokeWidth='0'
	viewBox='0 0 16 16'
	height='1em'
	width='1em'
	xmlns='http://www.w3.org/2000/svg'
>
	<path
		fill-rule='evenodd'
		d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
	></path>
</svg>; */
}
