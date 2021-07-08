import { ImageContainer, UserTextAvater, Image } from "./UserAvater.style";

export function UserAvater({
	userInfo: { user_image, user_name },
	dimensions: { wh, font },
}) {
	const isAvaterObject = user_image instanceof Object;
	const { background_color, text_color } = user_image;

	const initialsName = user_name
		.split(" ")
		.slice(0, 2)
		.map((name) => name[0])
		.join(" ");

	return (
		<ImageContainer
			backgroundColor={isAvaterObject && background_color}
			wh={wh}
		>
			{isAvaterObject && (
				<UserTextAvater textColor={isAvaterObject && text_color} font={font}>
					{initialsName}
				</UserTextAvater>
			)}

			{!isAvaterObject && (
				<Image src={user_image} alt="User Image" draggable="false" />
			)}
		</ImageContainer>
	);
}
