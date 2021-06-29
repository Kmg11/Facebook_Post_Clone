import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFetchPost } from "../../Hooks/useFetch/useFetchPost";
import { useLocalStorage } from "../../Hooks/useLocalStorage/useLocalStorage";
import { SubmitButton } from "./FormSubmitButton/FormSubmitButton";
import { UploadImages } from "./FormUploadImages/FormUploadImages";

import {
	CreatePostContainer,
	H1,
	FormStyle,
	Input,
	Textarea,
} from "./Form.style";

export function Form() {
	const history = useHistory();
	const [titleLS, setTitleLS] = useLocalStorage("title", "");
	const [descriptionLS, setDescriptionLS] = useLocalStorage("description", "");
	const { postData, isPending, success, error } = useFetchPost();

	const [mounted, setMounted] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [buttonValue, setButtonValue] = useState("Publish");
	const [images, setImages] = useState([]);

	// Timing Variable
	const time = useRef();

	// Set Values From Local Storage
	useEffect(() => {
		setMounted(true);

		if (!mounted) {
			titleLS !== "" && setTitle(titleLS);
			descriptionLS !== "" && setDescription(descriptionLS);
		}
	}, [mounted, titleLS, descriptionLS]);

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

	// Handle Submit Form
	const handleSubmit = (e) => {
		e.preventDefault();

		if (buttonValue === "Publish") {
			if (
				title.trim() !== "" ||
				description.trim() !== "" ||
				images.length > 0
			) {
				// Request Data
				postData("http://localhost:8000/posts", {
					title,
					description,
					likes: 0,
					like_status: false,
					images,
				});
			} else {
				setButtonValue("Please Type Someting");
				time.current = setTimeout(() => setButtonValue("Publish"), 3000);
			}
		}
	};

	return (
		<CreatePostContainer>
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

					<UploadImages images={images} setImages={setImages} />

					<SubmitButton
						response={{
							isPending: isPending,
							success: success,
							error: error,
						}}
						buttonValue={buttonValue}
						setButtonValue={setButtonValue}
						time={time}
					/>
				</FormStyle>
			</div>
		</CreatePostContainer>
	);
}
