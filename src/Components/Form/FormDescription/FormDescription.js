import { Textarea } from "./FormDescription.style";

export function FormDescription({
	description,
	setDescription,
	setDescriptionLS,
}) {
	return (
		<Textarea
			as="textarea"
			placeholder="Post Description"
			value={description}
			onChange={(e) => {
				setDescription(e.target.value);
				setDescriptionLS(e.target.value);
			}}
		/>
	);
}
