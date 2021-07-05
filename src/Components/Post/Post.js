import { createContext } from "react";
import { useFetchDelete } from "../../Hooks/useFetch/useFetchDelete";
import { PostTitle } from "./Title/PostTitle";
import { PostDescription } from "./PostDescription/PostDescription";
import { PostImages } from "./PostImages/PostImages";
import { PostButtons } from "./PostButtons/PostButtons";
import { PostContainer, Loading } from "./Post.style";

export const PostContext = createContext();

export function Post({ single, response }) {
	const { title, description, images } = response;
	const { deleteData, isPending } = useFetchDelete();
	const postContextData = { single, response, deleteData };

	return (
		<PostContext.Provider value={postContextData}>
			<PostContainer>
				{isPending && <Loading />}

				{title && <PostTitle />}

				{description && <PostDescription />}

				{images && <PostImages />}

				<PostButtons />
			</PostContainer>
		</PostContext.Provider>
	);
}
