import { useEffect, useRef, useState } from "react";
import { useFetchPost } from "../../Hooks/useFetchPost";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";

import { CreatePostStyle, H1, Form, Input, Textarea } from "./Styme";

export function CreatePost() {
	useDocumentTitle("Create Post");

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [buttonValue, setButtonValue] = useState("Publish");

	const { postData, isPending, success, error } = useFetchPost();

	const time = useRef();

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

	// Handle Button Value
	useEffect(() => {
		// Clear Timeout
		clearTimeout(time);

		// Setting Submit Button Value
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

		// Empty Inputs
		if (success) {
			setTitle("");
			setDescription("");
		}
	}, [isPending, success, error]);

	return (
		<CreatePostStyle>
			<div className="container">
				<H1>Create Post</H1>

				<Form onSubmit={handleSubmit}>
					<Input
						type="text"
						placeholder="Post Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<Textarea
						as="textarea"
						placeholder="Post Description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<Input type="submit" value={buttonValue} submit />
				</Form>
			</div>
		</CreatePostStyle>
	);
}
