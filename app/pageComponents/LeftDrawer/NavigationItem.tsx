import React from 'react';
import styles from './LeftDrawer.module.scss';

type ExpandedProps = {
	icon: React.ReactNode;
	name: React.ReactNode;
	className?: string;
};

type CollapsedProps = Omit<ExpandedProps, 'name'>;

export const NavigationItemExpanded: React.FC<
	ExpandedProps
> = ({ icon, name, className }) => {
	return (
		<div
			className={`d-flex gap-3 align-items-center ${styles['nav-item']} ${className}`}
		>
			<div className={styles['icon']}>{icon}</div>
			<div className={styles['name']}>{name}</div>
		</div>
	);
};

export const NavigationItemCollapsed: React.FC<
	CollapsedProps
> = ({ icon, className }) => {
	return (
		<div
			className={`d-flex gap-3 align-items-center ${styles['nav-item']} ${className}`}
		>
			<div className={styles['icon']}>{icon}</div>
		</div>
	);
};
