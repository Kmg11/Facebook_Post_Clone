import { useContext } from "react";
import { PostContext } from "../Post";
import {
	Name,
	UserInfo,
	ImageContainer,
	Image,
	UserTextAvater,
} from "./PostUserInfo.style";

export function PostUserInfo() {
	const { response } = useContext(PostContext);
	const { user_name, user_image } = response.user_info;

	return (
		<UserInfo>
			<UserImage userImage={user_image} userName={user_name} />
			<UserName userName={user_name} />
		</UserInfo>
	);
}

function UserImage({ userImage, userName }) {
	const isAvaterObject = userImage instanceof Object;
	const { background_color, text_color } = userImage;

	const initialsName = userName
		.split(" ")
		.slice(0, 2)
		.map((name) => name[0])
		.join(" ");

	return (
		<ImageContainer backgroundColor={isAvaterObject && background_color}>
			{isAvaterObject && (
				<UserTextAvater textColor={isAvaterObject && text_color}>
					{initialsName}
				</UserTextAvater>
			)}

			{!isAvaterObject && (
				<Image src={userImage} alt="User Image" draggable="false" />
			)}
		</ImageContainer>
	);
}

function UserName({ userName }) {
	return <Name>{userName}</Name>;
}
