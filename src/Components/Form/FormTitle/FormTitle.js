import { Input } from "../Form.style";

export function FormTitle({ title, setTitle, setTitleLS }) {
	return (
		<Input
			type="text"
			placeholder="Post Title"
			value={title}
			name="title"
			autoComplete="off"
			onChange={(e) => {
				setTitle(e.target.value);
				setTitleLS(e.target.value);
			}}
		/>
	);
}
