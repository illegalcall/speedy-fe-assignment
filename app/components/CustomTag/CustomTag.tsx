import React from 'react';

import styles from './CustomTag.module.scss';
import { tagColors } from './types';

type Props = React.HTMLAttributes<HTMLDivElement> & {
	value: any;
};

const CustomTag: React.FC<Props> = ({ value, ...rest }) => {
	const hex2rgba = (hex: any, alpha = 1) => {
		const [r, g, b] = hex
			.match(/\w\w/g)
			.map((x: any) => parseInt(x, 16));
		return `rgba(${r},${g},${b},${alpha})`;
	};

	const tagColor =
		tagColors[Math.floor(Math.random() * tagColors.length)];
	return (
		<span
			className={styles['tag']}
			style={{
				color: tagColor,
				borderColor: tagColor,
				backgroundColor: hex2rgba(tagColor, 0.2),
			}}
		>
			{value}
		</span>
	);
};

export default CustomTag;
