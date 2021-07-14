import { useCallback, useRef, useState } from "react";
import { PostsList } from "./Posts.style";
import { PostFR } from "./../Post/Post";
import { usePosts } from "./usePosts";

import {
	LoadingWrapper,
	Loading,
	ErrorMessage,
	EmptyMessage,
} from "./../../Styles/Components/Components.style";

export function Posts() {
	// const API = useContext(APIContext);
	const [pageNumber, setPageNumber] = useState(1);

	const {
		getPosts: getData,
		posts,
		isPending,
		error,
		success,
		hasMore,
	} = usePosts(pageNumber);
	console.log(posts)
	const observer = useRef();

	const lastPost = useCallback(
		(node) => {
			if (isPending) return;
			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNumber((prevPageNumber) => prevPageNumber + 1);
				}
			});

			if (node) observer.current.observe(node);
		},
		[isPending, hasMore]
	);

	const postsList =
		posts && posts.length > 0 ? (
			posts.map(
				(
					{ id, global_info, user_info, post_info, buttons_info, comments },
					index
				) => {
					return (
						<PostFR
							key={id}
							ref={posts.length === index + 1 ? lastPost : null}
							single={false}
							response={{
								id,
								global_info,
								user_info,
								post_info,
								buttons_info,
								comments,
								getData,
							}}
						></PostFR>
					);
				}
			)
		) : (
			<EmptyMessage>No Posts Added</EmptyMessage>
		);

	return (
		<PostsList>
			<div className="container">
				{success && postsList}

				{isPending && (
					<LoadingWrapper>
						<Loading />
					</LoadingWrapper>
				)}

				{error && <ErrorMessage>{error} Please Try Again Later</ErrorMessage>}
			</div>
		</PostsList>
	);
}
