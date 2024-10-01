import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'w-full px-3 py-1 text-xl leading-8 transition-colors duration-200 ease-in-out outline-none text-primary-celeste rounded-xl focus:bg-transparent focus:ring-2 focus:ring-primary-blue focus:border-primary-celeste placeholder:text-base',
					className,
				)}
				ref={ref}
				{...props}
			/>
		)
	},
)
Input.displayName = 'Input'

export { Input }
