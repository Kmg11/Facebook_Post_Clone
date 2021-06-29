import { Fragment } from "react";
import { Input } from "../Form.style";

import {
	DeleteImage,
	Image,
	ImageContainer,
	ImagesPreview,
} from "./FormUploadImages.style";

export function UploadImages({ images, setImages }) {
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
