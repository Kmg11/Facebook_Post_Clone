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

	const getPosts = useCallback(() => {
		setIsPending(true);

		setTimeout(() => {
			fetch(`${API}?_sort=id&_order=desc&_page=${pageNumber}&_limit=10`, {
				signal: abortCount.currentsignal,
			})
				.then((response) => {
					// Handling Errors From Server
					if (!response.ok) {
						throw Error("Could Not Fetch The Data For That Resource");
					}

					return response.json();
				})
				.then((data) => {
					setPosts((prevPosts) => [...prevPosts, ...data]);
					setHasMore(data.length);
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
	}, [API, pageNumber, abortCount]);

	useEffect(() => {
		getPosts();
		return () => abortCountCurrent.abort();
	}, [abortCount, getPosts, abortCountCurrent]);

	return { getPosts, posts, isPending, error, success, hasMore };
}
