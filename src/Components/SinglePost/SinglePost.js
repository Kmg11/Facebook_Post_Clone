import { Fragment } from "react";
import { useParams } from "react-router";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle/useDocumentTitle";
import { useFetchGet } from "../../Hooks/useFetch/useFetchGet";
import { Post } from "./../Post/Post";

import {
	LoadingWrapper,
	Loading,
	ErrorMessage,
} from "./../../Styles/Components/Components.style";

export function SinglePost() {
	const { id } = useParams();

	const {
		getData,
		data: post,
		isPending,
		success,
		error,
	} = useFetchGet(`http://localhost:8000/posts/${id}`);

	// This Code Here Because I Need To Set Document Title Using Post Title
	useDocumentTitle(success && post.title);

	return (
		<Fragment>
			<div className="container">
				{isPending && (
					<LoadingWrapper>
						<Loading />
					</LoadingWrapper>
				)}

				{error && (
					<ErrorMessage error>{error} Please Try Again Later</ErrorMessage>
				)}

				{success && post && (
					<Post
						single={true}
						response={{
							id,
							global_info: post.global_info,
							user_info: post.user_info,
							post_info: post.post_info,
							buttons_info: post.buttons_info,
							comments: post.comments,
							getData,
						}}
					/>
				)}
			</div>
		</Fragment>
	);
}
