import { Fragment } from "react";
import { useParams } from "react-router";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle/useDocumentTitle";
import { useFetchGet } from "../../Hooks/useFetch/useFetchGet";
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

	// This Code Here Because I Need To Set Document Title Using Post Title
	useDocumentTitle(post && post.title);

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
