import { useEffect, useState } from "react";
import { useFetchGet } from "../../Hooks/useFetch/useFetchGet";
import { Post } from "./../Post/Post";
import { PostsList, LoadingWrapper } from "./Style";

import {
	Loading,
	ErrorMessage,
	EmptyMessage,
} from "./../../Styles/Components/Components";

export function Posts() {
	// State For Animate Loding & Error Message
	const [animateLE, setAnimateLE] = useState(false);

	const {
		getData,
		data: posts,
		isPending,
		success,
		error,
	} = useFetchGet("http://localhost:8000/posts");

	useEffect(() => {
		let tiem;

		isPending && setTimeout(() => setAnimateLE(true));
		error && setTimeout(() => setAnimateLE(true));
		success && setAnimateLE(false);

		return () => clearTimeout(tiem);
	}, [isPending, error, success]);

	const postsList =
		posts && posts.length > 0 ? (
			Array.from(posts)
				.reverse()
				.map(({ id, title, description, likes }) => {
					return (
						<Post
							key={id}
							single={false}
							response={{
								id: id,
								title: title,
								description: description,
								likes: likes,
								getData: getData,
								success: success,
							}}
						></Post>
					);
				})
		) : (
			<EmptyMessage>No Posts Added</EmptyMessage>
		);

	return (
		<PostsList>
			<div className="container">
				{isPending && (
					<LoadingWrapper show={animateLE ? true : false}>
						<Loading />
					</LoadingWrapper>
				)}

				{error && (
					<ErrorMessage show={animateLE ? true : false}>
						{error} Please Try Again Later
					</ErrorMessage>
				)}

				{success && postsList}
			</div>
		</PostsList>
	);
}
