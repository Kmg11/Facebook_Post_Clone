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
	const handleImages = async (e) => {
		if (e.target.files) {
			// This Code For Real Websites To Send Images To The Server
			/*
			const formData = new FormData();

			for (const image of e.target.files) {
				formData.append("image", image);
			}

			let newFiles = Array.from(e.target.files).map((image) =>
				image.type.indexOf("image") !== -1 ? formData.append("image", image); : null
			);

			setImages(formData);
			*/

			// First Way Using URL Object
			/**
			 * This Way Have A Loot Of Proolems
			 * 	- Only One Post Could Have Images
			 * 	- When Browser Tab Close The Images URL Will Deleted
			 */
			/*
			let newFiles = Array.from(e.target.files).map((image) =>
				image.type.indexOf("image") !== -1 ? URL.createObjectURL(image) : null
			);

			setImages((prevFiles) =>
				prevFiles.concat(newFiles.filter((file) => file !== null))
			);

			Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
			*/

			// Second Way Convert To Base64
			/**
			 * This Way Have A Loot Of Proolems
			 * 	- Take A Long Time To Preview Images
			 * 	- Can't Add More Than 2 Images In Post Becaue It's URL Heavy
			 *  - Bad Preformance
			 */
			/*
			const converttoBase64 = (file) => {
				return new Promise((resolve, reject) => {
					const fileReader = new FileReader();
					fileReader.readAsDataURL(file);

					fileReader.onload = () => {
						resolve(fileReader.result);
					};

					fileReader.onerror = (err) => {
						reject(err);
					};
				});
			};

			const base64Files = Array.from(e.target.files).map((image) =>
				image.type.indexOf("image") !== -1 ? converttoBase64(image) : null
			);

			const newFiles = await Promise.all(base64Files);

			setImages((prevFiles) =>
				prevFiles.concat(newFiles.filter((image) => image !== null))
			);
			*/

			// Third Way Using Name
			/**
			 * This Way Have A Proolems
			 * 	- You Can't Use Images Outside The [public/images] Folder
			 * 		- Because Browsers Security
			 * 		- But It's The Best Way For Preformance & Stabilty
			 */

			let newFiles = Array.from(e.target.files).map((image) =>
				image.type.indexOf("image") !== -1 ? `/images/${image.name}` : null
			);

			setImages((prevFiles) =>
				prevFiles.concat(newFiles.filter((file) => file !== null))
			);
		}
	};

	const deleteImage = (index) => {
		let newArray = images.filter((element, imgIndex) => imgIndex !== index);
		setImages(newArray);
	};

	return (
		<Fragment>
			<Input type="file" multiple accept="image/*" onChange={handleImages} />

			<ImagesPreview haveImages={images.length > 0 ? true : false}>
				{images &&
					Array.from(images).map((image, index) => {
						return (
							<ImageContainer key={index}>
								<DeleteImage onClick={() => deleteImage(index)}>X</DeleteImage>
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
