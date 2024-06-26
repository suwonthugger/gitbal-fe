export default function SchoolChangeInput({ placeholder, type, value, onChange, ...props }) {
	return (
		<>
			<input
				className="mt-5 h-10 w-full rounded border border-grey69 p-3 text-sm  text-black19 focus:border-primary"
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
			/>
		</>
	);
}
