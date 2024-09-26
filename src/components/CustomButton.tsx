import { Button } from '@/components/ui/button'
import { ReactNode } from 'react'

interface CustomButtonProps {
	children: ReactNode
	onClick?: () => void
	className?: string
	isActive?: boolean
	type?: 'button' | 'submit' | 'reset'
}

export const CustomButton: React.FC<CustomButtonProps> = ({
	children,
	onClick,
	isActive = true,
	className = '',
	type = 'button',
}) => {
	return (
		<Button
			type={type}
			className={`w-full px-4 py-2 font-primary font-medium rounded-3xl transition-colors duration-300 text-xl ${
				isActive
					? 'bg-active-button-bg text-active-button-text hover:bg-active-button-hover-bg'
					: 'bg-inactive-button-bg text-inactive-button-text hover:bg-active-button-hover-bg hover:text-active-button-text'
			} ${className}`}
			onClick={onClick}
		>
			{children}
		</Button>
	)
}
