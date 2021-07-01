import { Textarea } from "./FormDescription.style";

export function FormDescription(props) {
	const { description, setDescription, setDescriptionLS } = props;

	return (
		<Textarea
			as="textarea"
			placeholder="Post Description"
			value={description}
			name="description"
			autoComplete="off"
			onChange={(e) => {
				setDescription(e.target.value);
				setDescriptionLS(e.target.value);
			}}
		/>
	);
}
