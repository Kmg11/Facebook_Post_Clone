import { Fragment } from "react";
import { useParams } from "react-router";
import { useFetchGet } from "../../Hooks/useFetchGet";
import { Post } from "./../Post/Post";

import { Loading, Error } from "./Style";

export function SinglePost() {
	const { id } = useParams();

	const {
		data: post,
		isPending,
		success,
		error,
	} = useFetchGet(`http://localhost:8000/posts/${id}`);

	return (
		<Fragment>
			<div className="container">
				{isPending && <Loading>Loading...</Loading>}

				{error && <Error error>{error} Please Try Again Later</Error>}

				{success && post && (
					<Post
						title={post.title}
						description={post.description}
						likes={post.likes}
					/>
				)}
			</div>
		</Fragment>
	);
}
