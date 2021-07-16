import { Input } from "../Form.style";

export function FormTitle(props) {
	const { title, setTitle, setTitleLS } = props;

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
