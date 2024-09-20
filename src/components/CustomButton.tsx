import { Button } from '@/components/ui/button'
import { ReactNode } from 'react'

interface CustomButtonProps {
	children: ReactNode
	onClick?: () => void
	className?: string
	type?: 'button' | 'submit' | 'reset'
}

export const CustomButton: React.FC<CustomButtonProps> = ({
	children,
	onClick,
	className = '',
	type = 'button',
}) => {
	return (
		<Button
			type={type}
			className={`w-full md:w-[333px] h-10 font-normal border-2 border-white rounded-lg bg-[#08121f] text-sm ${className}`}
			onClick={onClick}
		>
			{children}
		</Button>
	)
}
