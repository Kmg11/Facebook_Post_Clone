import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFetchPost } from "../../Hooks/useFetch/useFetchPost";
import { useLocalStorage } from "../../Hooks/useLocalStorage/useLocalStorage";
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

export function Form() {
	const history = useHistory();
	const { postData } = useFetchPost();
	const [titleLS, setTitleLS] = useLocalStorage("title", "");
	const [descriptionLS, setDescriptionLS] = useLocalStorage("description", "");
	const [title, setTitle] = useState(titleLS);
	const [description, setDescription] = useState(descriptionLS);
	const [images, setImages] = useState([]);
	const [buttonValue, setButtonValue] = useState(BTNPUBLISH);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (buttonValue === BTNPUBLISH) {
			if (
				title.trim() !== "" ||
				description.trim() !== "" ||
				images.length > 0
			) {
				setButtonValue(BTNLOADING);

				postData(
					"http://localhost:8000/posts",
					{
						title,
						description,
						likes: 0,
						like_status: false,
						images,
					},
					() => {
						setTitle("");
						setTitleLS("");
						setDescription("");
						setDescriptionLS("");
						history.push("/");
					},
					() => {
						setButtonValue(BTNERROR);
					}
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

					<UploadImages images={images} setImages={setImages} />

					<SubmitButton BTNPUBLISH={BTNPUBLISH} buttonValue={buttonValue} />
				</FormStyle>
			</div>
		</CreatePostContainer>
	);
}
