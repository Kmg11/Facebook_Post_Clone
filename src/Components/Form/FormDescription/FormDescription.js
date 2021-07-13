import { Textarea } from "./FormDescription.style";

export function FormDescription(props) {
	const {
		description,
		setDescription,
		setDescriptionLS,
		focusValues: { descriptionRef },
	} = props;

	return (
		<Textarea
			as="textarea"
			placeholder="Post Description"
			value={description}
			name="description"
			autoComplete="off"
			ref={descriptionRef}
			onChange={(e) => {
				setDescription(e.target.value);
				setDescriptionLS(e.target.value);
			}}
		/>
	);
}
