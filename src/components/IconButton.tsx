import { Button } from '@/components/ui/button'
import { IconType } from 'react-icons'

interface IconButtonProps {
	icon: IconType
	label: string
	isActive?: boolean
	onClick?: () => void
	className?: string
}

export const IconButton: React.FC<IconButtonProps> = ({
	icon: Icon,
	label,
	isActive = true,
	onClick,
	className = '',
}) => {
	return (
		<Button
			className={`w-full px-4 py-2 font-primary font-medium rounded-3xl transition-colors duration-300 text-xl ${
				isActive
					? 'bg-active-button-bg text-active-button-text hover:bg-active-button-hover-bg'
					: 'bg-inactive-button-bg text-inactive-button-text hover:bg-active-button-hover-bg hover:text-active-button-text'
			} ${className}`}
			onClick={onClick}
		>
			<Icon className='inline-block mr-2' /> {label}
		</Button>
	)
}
