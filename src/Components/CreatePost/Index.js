import { useState } from "react";
import { CreatePostStyle, H1, Form, Input, Textarea } from "./Styme";

export function CreatePost() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<CreatePostStyle>
			<div className="container">
				<H1>Create Post</H1>

				<Form>
					<Input
						type="text"
						placeholder="Post Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<Textarea
						as="Textarea"
						placeholder="Post Description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<Input type="submit" placeholder="Publish" submit />
				</Form>
			</div>
		</CreatePostStyle>
	);
}
