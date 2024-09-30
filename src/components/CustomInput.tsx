import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RiEyeCloseLine, RiEyeFill } from 'react-icons/ri'

interface CustomInputProps {
	label: string
	name: string
	type?: string
	placeholder: string
	showPasswordToggle?: boolean
	field: object
	showPassword?: boolean
	setShowPassword?: (show: boolean) => void
}

export const CustomInput: React.FC<CustomInputProps> = ({
	label,
	name,
	type = 'text',
	placeholder,
	showPasswordToggle = false,
	field,
	showPassword,
	setShowPassword,
}) => {
	return (
		<FormItem>
			<FormLabel className='text-lg font-bold font-primary text-primary-celeste'>{label}</FormLabel>
			<FormControl>
				<div className='relative'>
					<Input
						name={name}
						type={showPasswordToggle && showPassword ? 'text' : type}
						placeholder={placeholder}
						{...field}
					/>
					{showPasswordToggle && setShowPassword && (
						<Button
							type='button'
							size='icon'
							variant='link'
							className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-300'
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? (
								<RiEyeFill className='w-4 h-4 text-primary-celeste' />
							) : (
								<RiEyeCloseLine className='w-4 h-4 text-primary-celeste' />
							)}
							<span className='sr-only'>
								{showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
							</span>
						</Button>
					)}
				</div>
			</FormControl>
			<FormMessage />
		</FormItem>
	)
}
