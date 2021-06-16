import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle/useDocumentTitle";
import { useFetchGet } from "../../Hooks/useFetch/useFetchGet";
import { Post } from "./../Post/Post";
import { LoadingWrapper } from "./Style";
import { Loading, ErrorMessage } from "./../../Styles/Components/Components";

export function SinglePost() {
	const { id } = useParams();

	// State For Animate Loding & Error Message
	const [animateLE, setAnimateLE] = useState(false);

	const {
		getData,
		data: post,
		isPending,
		success,
		error,
	} = useFetchGet(`http://localhost:8000/posts/${id}`);

	// This Code Here Because I Need To Set Document Title Using Post Title
	useDocumentTitle(post && post.title);

	useEffect(() => {
		let tiem;

		isPending && setTimeout(() => setAnimateLE(true));
		error && setTimeout(() => setAnimateLE(true));
		success && setAnimateLE(false);

		return () => clearTimeout(tiem);
	}, [isPending, error, success]);

	return (
		<Fragment>
			<div className="container">
				{isPending && (
					<LoadingWrapper show={animateLE ? true : false}>
						<Loading />
					</LoadingWrapper>
				)}

				{error && (
					<ErrorMessage error show={animateLE ? true : false}>
						{error} Please Try Again Later
					</ErrorMessage>
				)}

				{success && post && (
					<Post
						single={true}
						response={{
							id: id,
							title: post.title,
							description: post.description,
							likes: post.likes,
							getData: getData,
							success: success,
						}}
						id={id}
						title={post.title}
						description={post.description}
						likes={post.likes}
						getData={getData}
						success={success}
					/>
				)}
			</div>
		</Fragment>
	);
}
