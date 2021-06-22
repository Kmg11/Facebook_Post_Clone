import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFetchPost } from "../../Hooks/useFetch/useFetchPost";
import { useLocalStorage } from "../../Hooks/useLocalStorage/useLocalStorage";
import { SmallLoading } from "./../../Styles/Components/Components";
import {
	CreatePostStyle,
	H1,
	FormStyle,
	Input,
	Textarea,
	SubmitButton,
	SubmitButtonText,
} from "./Style";

export function Form() {
	const history = useHistory();

	// Destruction Custome Hooks
	const [titleLS, setTitleLS] = useLocalStorage("title", "");
	const [descriptionLS, setDescriptionLS] = useLocalStorage("description", "");
	const { postData, isPending, success, error } = useFetchPost();

	// States
	const [mounted, setMounted] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [buttonValue, setButtonValue] = useState("Publish");

	// Timing Variable
	const time = useRef();

	// Handle Submit Form
	const handleSubmit = (e) => {
		e.preventDefault();

		if (buttonValue === "Publish") {
			if (title !== "" || description !== "") {
				// Request Data
				postData("http://localhost:8000/posts", {
					title,
					description,
					likes: 0,
					like_status: false,
				});
			} else {
				setButtonValue("Please Type Someting");
				time.current = setTimeout(() => setButtonValue("Publish"), 3000);
			}
		}
	};

	// Set Values From Local Storage
	useEffect(() => {
		setMounted(true);

		if (!mounted) {
			titleLS !== "" && setTitle(titleLS);
			descriptionLS !== "" && setDescription(descriptionLS);
		}
	}, [mounted, titleLS, descriptionLS]);

	// Handle Submit Button Value
	useEffect(() => {
		if (isPending) {
			setButtonValue(<SmallLoading />);
		} else if (success === true) {
			setButtonValue("Published");
			time.current = setTimeout(() => setButtonValue("Publish"), 3000);
		} else if (error !== null) {
			setButtonValue("Error Please Try Again Later");
			time.current = setTimeout(() => setButtonValue("Publish"), 3000);
		} else {
			setButtonValue("Publish");
		}

		return () => {
			clearTimeout(time.current);
		};
	}, [isPending, success, error, history]);

	// Empty Inputs & Redirect
	useEffect(() => {
		if (success) {
			setTitle("");
			setTitleLS("");
			setDescription("");
			setDescriptionLS("");

			// Redirect To The Home Page
			if (title === "" && description === "") {
				history.push("/");
			}
		}
	}, [success, title, setTitleLS, description, setDescriptionLS, history]);

	return (
		<CreatePostStyle>
			<div className="container">
				<H1>Create Post</H1>

				<FormStyle onSubmit={handleSubmit}>
					<Input
						type="text"
						placeholder="Post Title"
						value={title}
						autoFocus
						onChange={(e) => {
							setTitle(e.target.value);
							setTitleLS(e.target.value);
						}}
					/>
					<Textarea
						as="textarea"
						placeholder="Post Description"
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
							setDescriptionLS(e.target.value);
						}}
					/>

					<SubmitButton
						as="button"
						type="submit"
						clickable={buttonValue !== "Publish" && true}
					>
						<SubmitButtonText>{buttonValue}</SubmitButtonText>
					</SubmitButton>
				</FormStyle>
			</div>
		</CreatePostStyle>
	);
}
