import { Input } from "../Form.style";

export function FormTitle(props) {
	const {
		title,
		setTitle,
		setTitleLS,
		focusValues: { titleRef, descriptionRef, handleFocus },
	} = props;

	return (
		<Input
			type="text"
			placeholder="Post Title"
			value={title}
			name="title"
			autoComplete="off"
			ref={titleRef}
			onKeyUp={(e) => handleFocus(e, descriptionRef)}
			onChange={(e) => {
				setTitle(e.target.value);
				setTitleLS(e.target.value);
			}}
		/>
	);
}
