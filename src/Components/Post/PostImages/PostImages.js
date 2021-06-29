import { useContext } from "react";
import { PostContext } from "../Post";

import {
	ImagesPreview,
	ImageContainer,
	ImageOverlay,
	Image,
} from "./PostImages.style";

export function PostImages() {
	const { single, response } = useContext(PostContext);
	const { id, title, images } = response;

	const slicedImages =
		images && (!single && images.length > 4 ? images.slice(0, 4) : images);

	return (
		<ImagesPreview imagesNumber={slicedImages.length} single={single}>
			{slicedImages.map((image, index) => {
				return (
					<ImageContainer key={index}>
						{index === 3 && images.length > 4 && !single && (
							<ImageOverlay
								to={`posts/${id}/${title && title.replaceAll(" ", "-")}`}
							>
								+{images.length - slicedImages.length}
							</ImageOverlay>
						)}
						<Image src={image} alt={`Number ${index}`} />
					</ImageContainer>
				);
			})}
		</ImagesPreview>
	);
}
