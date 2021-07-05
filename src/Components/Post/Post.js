import { createContext } from "react";
import { useFetchDelete } from "../../Hooks/useFetch/useFetchDelete";
import { PostTitle } from "./PostTitle/PostTitle";
import { PostDescription } from "./PostDescription/PostDescription";
import { PostImages } from "./PostImages/PostImages";
import { PostButtons } from "./PostButtons/PostButtons";
import { PostContainer, Loading } from "./Post.style";
import { PostUserInfo } from "./PostUserInfo/PostUserInfo";

export const PostContext = createContext();

export function Post({ single, response }) {
	const { user_info, post_info } = response;
	const { deleteData, isPending } = useFetchDelete();
	const postContextData = { single, response, deleteData };

	return (
		<PostContext.Provider value={postContextData}>
			<PostContainer>
				{isPending && <Loading />}

				{user_info && <PostUserInfo />}

				{post_info.title && <PostTitle />}

				{post_info.description && <PostDescription />}

				{post_info.images && <PostImages />}

				<PostButtons />
			</PostContainer>
		</PostContext.Provider>
	);
}
