import {useSelector} from 'react-redux';
interface IInputProps {
	label?: string;
	type?: string;
	placeholder?: string;
	labelClassName?: string;
	inputClassName?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register?: any;
	value?: string;
	errors?: any;
}
interface RootState {
	dataa: {
		validationSelect: boolean;
	};
}
const TextInput = ({label, type = 'text', placeholder, register, inputClassName, errors}: IInputProps) => {
	const selectValid = useSelector((state: RootState) => state.dataa.validationSelect);

	return (
		<div className={` ${inputClassName} space-y-2`}>
			{label && <label className="pl-2 inline-flex">{label}</label>}
			<div className={`w-full relative `}>
				<input
					type={type}
					placeholder={placeholder}
					{...register}
					autoComplete="off"
					className={`${errors && selectValid ? 'border-red-300 border-2' : ''}`}
				/>
			</div>
		</div>
	);
};

export default TextInput;
