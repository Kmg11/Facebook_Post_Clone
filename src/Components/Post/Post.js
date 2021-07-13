import React, { createContext, forwardRef, useState } from "react";
import { useFetchDelete } from "../../Hooks/useFetch/useFetchDelete";
import { PostTitle } from "./PostTitle/PostTitle";
import { PostDescription } from "./PostDescription/PostDescription";
import { PostImages } from "./PostImages/PostImages";
import { PostButtons } from "./PostButtons/PostButtons";
import { PostContainer, Loading } from "./Post.style";
import { PostUserInfo } from "./PostUserInfo/PostUserInfo";
import { PostComments } from "./PostComments/PostComments";

export const PostContext = createContext();

export function Post({ single, response }, ref) {
	const { user_info, post_info, comments } = response;
	const { deleteData, isPending } = useFetchDelete();
	const [showComments, setShowComments] = useState(single ? true : false);
	const [commentsLength, setCommentsLength] = useState(comments.length);
	const commentsState = { commentsLength, setCommentsLength };
	const postContextData = { single, response, deleteData, commentsState };

	return (
		<PostContext.Provider value={postContextData}>
			<PostContainer ref={ref}>
				{isPending && <Loading />}

				{user_info && <PostUserInfo />}

				{post_info.title && <PostTitle />}

				{post_info.description && <PostDescription />}

				{post_info.images && <PostImages />}

				<PostButtons setShowComments={setShowComments} />

				{showComments && <PostComments />}
			</PostContainer>
		</PostContext.Provider>
	);
}

export const PostFR = forwardRef(Post);
