import { Fragment } from "react";
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
	SubmitButtonStyle,
	SubmitButtonText,
	ImagesPreview,
	ImageContainer,
	DeleteImage,
	Image,
} from "./Style";

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
		</CreatePostStyle>
	);
}

function UploadImages({ images, setImages }) {
	const showImages = (e) => {
		if (e.target.files) {
			let newFiles = Array.from(e.target.files).map((file) =>
				file.type.indexOf("image") !== -1 ? URL.createObjectURL(file) : null
			);

			setImages((prevFiles) =>
				prevFiles.concat(newFiles.filter((file) => file !== null))
			);

			Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
		}
	};

	const deleteImage = (index) => {
		let newArray = images.filter((element, imgIndex) => imgIndex !== index);
		setImages(newArray);
	};

	return (
		<Fragment>
			<Input type="file" multiple accept="image/*" onChange={showImages} />

			<ImagesPreview haveImages={images.length > 0 ? true : false}>
				{images &&
					Array.from(images).map((image, index) => {
						return (
							<ImageContainer key={index} onClick={() => deleteImage(index)}>
								<DeleteImage>X</DeleteImage>

								<Image src={image} alt={`Image Number ${index + 1}`} />
							</ImageContainer>
						);
					})}
			</ImagesPreview>
		</Fragment>
	);
}

function SubmitButton({ response, time, buttonValue, setButtonValue }) {
	const { isPending, success, error } = response;

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
	}, [isPending, success, error, setButtonValue, time]);

	return (
		<SubmitButtonStyle
			as="button"
			type="submit"
			clickable={buttonValue !== "Publish" && true}
		>
			<SubmitButtonText>{buttonValue}</SubmitButtonText>
		</SubmitButtonStyle>
	);
}
