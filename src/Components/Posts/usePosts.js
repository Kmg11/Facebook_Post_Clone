import { useCallback, useEffect, useState, useContext, useRef } from "react";
import { APIContext } from "../../App.js";

export function usePosts(pageNumber) {
	const API = useContext(APIContext);

	const [posts, setPosts] = useState([]);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [hasMore, setHasMore] = useState(false);

	const abortCount = useRef(new AbortController());
	const abortCountCurrent = abortCount.current;

	const getPosts = useCallback(
		(deletePost, index) => {
			let getPageOfIndex =
				Math.ceil(index / 10) === 0 ? 1 : Math.ceil(index / 10);
			let APIPage = deletePost ? getPageOfIndex : pageNumber;

			setIsPending(true);

			setTimeout(() => {
				fetch(`${API}?_sort=id&_order=desc&_page=${APIPage}`, {
					signal: abortCount.current.signal,
				})
					.then((response) => {
						// Handling Errors From Server
						if (!response.ok) {
							throw Error("Could Not Fetch The Data For That Resource");
						}

						return response.json();
					})
					.then((data) => {
						!deletePost && setPosts((prevPosts) => [...prevPosts, ...data]);

						deletePost &&
							setPosts((prev) => {
								let itemsBeforePage =
									APIPage !== 1 ? prev.slice(0, (APIPage - 1) * 10) : [];

								let startEnd = (pageNumber - APIPage) * 10;

								let itemsAfterPage =
									pageNumber > APIPage
										? prev.slice(startEnd + 1, startEnd * 2)
										: [];

								return [...itemsBeforePage, ...data, ...itemsAfterPage];
							});

						!deletePost && setHasMore(data.length);
						setSuccess(true);
						setIsPending(false);
						setError(null);
					})
					.catch((err) => {
						if (err.name !== "AbortError") {
							setIsPending(false);
							setError(err.message);
							setSuccess(null);
						}
					});
			}, 500);
		},
		[API, pageNumber, abortCount]
	);

	useEffect(() => {
		getPosts();
		// The Next Code Broke All Functionality
		// return () => abortCountCurrent.abort();
	}, [getPosts, abortCountCurrent]);

	return { getPosts, posts, isPending, error, success, hasMore };
}
