import { Button } from '@/components/ui/button'
import { IconType } from 'react-icons'

interface IconButtonProps {
	icon: IconType
	label: string
	onClick?: () => void
	className?: string
}

export const IconButton: React.FC<IconButtonProps> = ({
	icon: Icon,
	label,
	onClick,
	className = '',
}) => {
	return (
		<Button
			className={`w-full md:w-[333px] border-2 border-white rounded-lg  h-10 bg-gray-700 ${className}`}
			onClick={onClick}
		>
			<Icon className='inline-block mr-2' /> {label}
		</Button>
	)
}
