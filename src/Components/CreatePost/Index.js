import { useEffect, useRef, useState } from "react";

import { useFetchPost } from "../../Hooks/useFetchPost";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

import { CreatePostStyle, H1, Form, Input, Textarea } from "./Styme";

export function CreatePost() {
	// Trigger Custome Hooks
	useDocumentTitle("Create Post");

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
			setButtonValue("Loading...");
		} else if (success === true) {
			setButtonValue("Published");
			time.current = setTimeout(() => setButtonValue("Publish"), 3000);
		} else if (error !== null) {
			setButtonValue("Error Please Try Again Later");
			time.current = setTimeout(() => setButtonValue("Publish"), 3000);
		} else {
			setButtonValue("Publish");
		}
	}, [isPending, success, error]);

	// Empty Inputs
	useEffect(() => {
		if (success) {
			setTitle("");
			setTitleLS("");
			setDescription("");
			setDescriptionLS("");
		}
	}, [success, setTitleLS, setDescriptionLS]);

	return (
		<CreatePostStyle>
			<div className="container">
				<H1>Create Post</H1>

				<Form onSubmit={handleSubmit}>
					<Input
						type="text"
						placeholder="Post Title"
						value={title}
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
					<Input type="submit" value={buttonValue} submit />
				</Form>
			</div>
		</CreatePostStyle>
	);
}
