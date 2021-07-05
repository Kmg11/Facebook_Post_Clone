import { useContext } from "react";
import { PostContext } from "../Post";
import { Name, UserInfo, ImageContainer, Image } from "./PostUserInfo.style";

export function PostUserInfo() {
	const { response } = useContext(PostContext);
	const { user_name, user_image } = response.user_info;

	return (
		<UserInfo>
			<UserImage userImage={user_image} />
			<UserName userName={user_name} />
		</UserInfo>
	);
}

function UserImage({ userImage }) {
	return (
		<ImageContainer>
			<Image src={userImage} alt="User Image" draggable="false" />
		</ImageContainer>
	);
}

function UserName({ userName }) {
	return <Name>{userName}</Name>;
}
