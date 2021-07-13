import {
	UserDetails,
	ImageContainer,
	Image,
	ImageUpload,
	NameInput,
} from "./FormUserDetails.style";

export function FormUserDetails({ userImageInfo, userNameInfo }) {
	return (
		<UserDetails>
			<UserImage userImageInfo={userImageInfo} />
			<UserName userNameInfo={userNameInfo} />
		</UserDetails>
	);
}

function UserImage({ userImageInfo }) {
	const { userImage, setUserImage, setUserImageLS } = userImageInfo;

	const handleImage = (e) => {
		const image = e.target.files[0];

		if (image) {
			let imageSRC =
				image.type.indexOf("image") !== -1 ? `/images/${image.name}` : null;

			setUserImage(imageSRC);
			setUserImageLS(imageSRC);
		}
	};

	return (
		<ImageContainer haveImage={userImage ? false : true}>
			<ImageUpload
				as="input"
				type="file"
				accept="image/*"
				onChange={handleImage}
			/>

			{userImage && (
				<Image as="img" src={userImage} alt="Your Image" draggable="false" />
			)}
		</ImageContainer>
	);
}

function UserName({ userNameInfo }) {
	const {
		userName,
		setUserName,
		setUserNameLS,
		focusValues: { userNameRef, titleRef, handleFocus },
	} = userNameInfo;

	return (
		<NameInput
			type="text"
			value={userName}
			placeholder="Your Name"
			reqiured
			autoFocus
			autoComplete="off"
			ref={userNameRef}
			onKeyUp={(e) => handleFocus(e, titleRef)}
			onChange={(e) => {
				setUserName(e.target.value);
				setUserNameLS(e.target.value);
			}}
		/>
	);
}
