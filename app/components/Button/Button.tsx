import React from 'react';
import styles from './Button.module.scss';

export type ButtonTheme = 'primary' | 'secondary';

export interface IButtonProps {
	children: React.ReactNode;
	theme?: ButtonTheme;
	leftIcon?: React.ReactNode;
	className?: string;
	onClick?: () => void;
	type?: 'submit' | 'button';
}

const Button = React.forwardRef<
	HTMLButtonElement | null,
	IButtonProps
>(
	(
		{
			children,
			theme = 'primary',
			leftIcon,
			className,
			type,
			...rest
		},
		ref
	) => {
		return (
			<button
				type={type}
				ref={ref}
				className={`${
					styles[`container-${theme}`]
				} ${className}`}
				{...rest}
			>
				{leftIcon && (
					<div className={styles[`left-icon`]}>
						{leftIcon}
					</div>
				)}
				<div className={styles[`text-${theme}`]}>
					{children}
				</div>
			</button>
		);
	}
);

Button.displayName = 'Button';
export default Button;
