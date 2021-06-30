import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFetchPost } from "../../Hooks/useFetch/useFetchPost";
import { useLocalStorage } from "../../Hooks/useLocalStorage/useLocalStorage";
import { FormTitle } from "./FormTitle/FormTitle";
import { FormDescription } from "./FormDescription/FormDescription";
import { UploadImages } from "./FormUploadImages/FormUploadImages";
import { SubmitButton } from "./FormSubmitButton/FormSubmitButton";
import { SmallLoading } from "../../Styles/Components/Components.style";
import { CreatePostContainer, H1, FormStyle } from "./Form.style";

// Constants For Button Value
const BTNPUBLISH = "Publish";
const BTNPUBLISHED = "Published";
const BTNERROR = "Error Please Try Again Later";
const BTNLOADING = <SmallLoading />;

export function Form() {
	const history = useHistory();
	const [titleLS, setTitleLS] = useLocalStorage("title", "");
	const [descriptionLS, setDescriptionLS] = useLocalStorage("description", "");
	const { postData, isPending, success, error } = useFetchPost();

	const [title, setTitle] = useState(titleLS);
	const [description, setDescription] = useState(descriptionLS);
	const [images, setImages] = useState([]);
	const [buttonValue, setButtonValue] = useState(BTNPUBLISH);

	// Timing Variable
	const time = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (buttonValue === BTNPUBLISH) {
			if (
				title.trim() !== "" ||
				description.trim() !== "" ||
				images.length > 0
			) {
				// Request Data
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
					}
				);
			} else {
				setButtonValue("Please Type Someting");
				time.current = setTimeout(() => setButtonValue(BTNPUBLISH), 3000);
			}
		}
	};

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

					<SubmitButton
						response={{
							isPending: isPending,
							success: success,
							error: error,
						}}
						buttonConstants={{
							BTNPUBLISH: BTNPUBLISH,
							BTNPUBLISHED: BTNPUBLISHED,
							BTNERROR: BTNERROR,
							BTNLOADING: BTNLOADING,
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
