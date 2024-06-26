import Select from 'react-select';
import { Controller } from 'react-hook-form';

const PLACE_HOLDER = '클릭하세요';

export default function MyDropdownSelect({ optionsData, control }) {
	const customStyles = {
		control: (baseStyles, state) => ({
			...baseStyles,
			'height': '2.5rem', //w-10
			'fontSize': '0.875rem', //font-sm
			'padding': 2, //p-2
			'borderColor': '#696969',
			'&:hover': { borderColor: '#696969' },
			'&:focus': { borderColor: '#1368E8' },
		}),
		placeholder: (defaultStyles) => {
			return {
				...defaultStyles,
				color: '#A4ABB5',
			};
		},
		menu: (baseStyles, state) => ({
			...baseStyles,
			backgroundColor: 'white',
		}),
		option: (baseStyles, state) => ({
			...baseStyles,
			'backgroundColor': state.isSelected ? '#1368E8' : 'white',
			'border': '0.01rem solid #bdbdbd',
			'height': '100%',
			// 선택된 옵션은 파란색, 나머지는 흰색 배경
			// 기타 원하는 스타일 속성 추가 가능
			':hover': {
				backgroundColor: '#E7EFFC',
				color: 'black',
			},
		}),
	};

	return (
		<div className=" mt-8 w-full">
			<Controller
				name="selectedOption"
				control={control}
				defaultValue=""
				render={({ field }) => (
					<Select
						{...field}
						styles={customStyles}
						options={optionsData}
						placeholder={PLACE_HOLDER}
						noOptionsMessage={() => '찾으시는 대학교가 없습니다.'}
						onChange={(selectedOption) => {
							field.onChange(selectedOption);
						}}
					/>
				)}
			/>
		</div>
	);
}
