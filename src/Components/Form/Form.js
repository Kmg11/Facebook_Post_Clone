import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useFetchPost } from "../../Hooks/useFetch/useFetchPost";
import { useLocalStorage } from "../../Hooks/useLocalStorage/useLocalStorage";

import { FormUserDetails } from "./FormUserDetails/FormUserDetails";
import { FormTitle } from "./FormTitle/FormTitle";
import { FormDescription } from "./FormDescription/FormDescription";
import { UploadImages } from "./FormUploadImages/FormUploadImages";
import { SubmitButton } from "./FormSubmitButton/FormSubmitButton";

import { SmallLoading } from "../../Styles/Components/Components.style";
import { CreatePostContainer, H1, FormStyle } from "./Form.style";

const BTNPUBLISH = "Publish";
const BTNERROR = "Error Please Try Again Later";
const BTNTYPESOMETHING = "Please Type Someting";
const BTNLOADING = <SmallLoading />;

function getAvater() {
	const r = Math.round(Math.random() * 255);
	const g = Math.round(Math.random() * 255);
	const b = Math.round(Math.random() * 255);
	const backgroundColor = `rgb(${r}, ${g}, ${b})`;
	const textColor = r * 0.299 + g * 0.587 + b * 0.114 > 150 ? "#000" : "#FFF";
	return { background_color: backgroundColor, text_color: textColor };
}

export function Form() {
	const history = useHistory();
	const { postData } = useFetchPost();

	const [userImageLS, setUserImageLS] = useLocalStorage("user_image", "");
	const [userImage, setUserImage] = useState(userImageLS);

	const [userNameLS, setUserNameLS] = useLocalStorage("user_name", "");
	const [userName, setUserName] = useState(userNameLS);

	const [titleLS, setTitleLS] = useLocalStorage("title", "");
	const [title, setTitle] = useState(titleLS);

	const [descriptionLS, setDescriptionLS] = useLocalStorage("description", "");
	const [description, setDescription] = useState(descriptionLS);

	const [imagesLS, setImagesLS] = useLocalStorage("images", []);
	const [images, setImages] = useState(imagesLS);

	const [buttonValue, setButtonValue] = useState(BTNPUBLISH);

	const requestSuccessCallback = () => {
		setUserImage("");
		setUserImageLS("");
		setUserName("");
		setUserNameLS("");
		setTitle("");
		setTitleLS("");
		setDescription("");
		setDescriptionLS("");
		setImages([]);
		setImagesLS([]);
		history.push("/");
	};

	const requestErrorCallback = () => setButtonValue(BTNERROR);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (buttonValue === BTNPUBLISH) {
			if (
				userName.trim() !== "" &&
				(title.trim() !== "" || description.trim() !== "" || images.length > 0)
			) {
				setButtonValue(BTNLOADING);

				const date = new Date().toDateString().split(" ").slice(1).join(" ");

				postData(
					"http://localhost:8000/posts",
					{
						global_info: {
							post_date: date,
						},
						user_info: {
							user_name: userName,
							user_image: userImage === "" ? getAvater() : userImage,
						},
						post_info: {
							title,
							description,
							images,
						},
						buttons_info: {
							like: {
								likes: 0,
								like_status: false,
							},
						},
						comments: [],
					},
					requestSuccessCallback,
					requestErrorCallback
				);
			} else {
				setButtonValue(BTNTYPESOMETHING);
			}
		}
	};

	useEffect(() => {
		let time = 0;
		clearTimeout(time);
		time = setTimeout(() => setButtonValue(BTNPUBLISH), 3000);
		return () => clearTimeout(time);
	}, [buttonValue]);

	return (
		<CreatePostContainer>
			<div className="container">
				<H1>Create Post</H1>

				<FormStyle onSubmit={handleSubmit}>
					<FormUserDetails
						userImageInfo={{
							userImage: userImage,
							setUserImage: setUserImage,
							setUserImageLS: setUserImageLS,
						}}
						userNameInfo={{
							userName: userName,
							setUserName: setUserName,
							setUserNameLS: setUserNameLS,
						}}
					/>

					<FormTitle
						title={title}
						setTitle={setTitle}
						setTitleLS={setTitleLS}
					/>

					<FormDescription
						description={description}
						setDescription={setDescription}
						setDescriptionLS={setDescriptionLS}
					/>

					<UploadImages
						images={images}
						setImages={setImages}
						setImagesLS={setImagesLS}
					/>

					<SubmitButton BTNPUBLISH={BTNPUBLISH} buttonValue={buttonValue} />
				</FormStyle>
			</div>
		</CreatePostContainer>
	);
}
