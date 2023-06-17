'use client';
import React, { use, useState } from 'react';
import {
	Dashboard,
	History,
	LeftChevron,
	Logout,
	Profile,
	RightChevron,
	Socials,
	Speedy,
} from '@/app/icons';

import {
	NavigationItemCollapsed,
	NavigationItemExpanded,
} from './NavigationItem';

import styles from './LeftDrawer.module.scss';

const LeftDrawer = () => {
	const [showExpandedDrawer, setShowExpandedDrawer] =
		useState(false);
	const drawerClassName = showExpandedDrawer
		? styles['expanded']
		: styles['collapsed'];

	//TODO: Implement logic to determine which nav item is active
	const navItemActiveClassName = styles['nav-item__active'];

	return (
		<div
			className={`${styles['container']} ${drawerClassName}`}
		>
			<div
				className={styles['drawer-switch']}
				onClick={() => {
					setShowExpandedDrawer(!showExpandedDrawer);
				}}
			>
				{showExpandedDrawer ? (
					<LeftChevron />
				) : (
					<RightChevron />
				)}
			</div>
			<div className={`${styles['navigation']}`}>
				{showExpandedDrawer ? (
					<div className={styles['expanded']}>
						<NavigationItemExpanded
							className={styles['logo']}
							icon={<Speedy />}
							name={
								<span className={styles['logo__name']}>
									Speedy
								</span>
							}
						/>
						<NavigationItemExpanded
							icon={<Dashboard />}
							name='Dashboard'
							className={navItemActiveClassName}
						/>
						<NavigationItemExpanded
							icon={<History />}
							name='History'
						/>
						<NavigationItemExpanded
							icon={<Socials />}
							name='Social'
						/>
						<NavigationItemExpanded
							icon={<Profile />}
							name='Profile'
						/>
						<NavigationItemExpanded
							className={styles['logout']}
							icon={<Logout />}
							name='Logout'
						/>
					</div>
				) : (
					<div className={styles['collapsed']}>
						<NavigationItemCollapsed
							className={styles['logo']}
							icon={<Speedy />}
						/>
						<NavigationItemCollapsed icon={<Dashboard />} />
						<NavigationItemCollapsed icon={<History />} />
						<NavigationItemCollapsed icon={<Socials />} />
						<NavigationItemCollapsed icon={<Profile />} />
						<NavigationItemCollapsed
							className={`w-100 ${styles['logout']}`}
							icon={<Logout />}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default LeftDrawer;
