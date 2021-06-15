import { useCallback, useEffect, useState } from "react";

export function useFetchGet(url) {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [abortCount] = useState(new AbortController());

	const getData = useCallback(() => {
		setIsPending(true);

		setTimeout(() => {
			fetch(url, { signal: abortCount.signal })
				.then((response) => {
					// Handling Errors From Server
					if (!response.ok) {
						throw Error("Could Not Fetch The Data For That Resource");
					}

					return response.json();
				})
				.then((data) => {
					setIsPending(false);
					setData(data);
					setSuccess(true);
					setError(null);
				})
				.catch((err) => {
					if (err.name !== "AbortError") {
						setIsPending(false);
						setError(err.message);
						setSuccess(null);
					}
				});
		}, 1000);
	}, [url, abortCount]);

	useEffect(() => {
		getData();
		return () => abortCount.abort();
	}, [abortCount, getData]);

	return { getData, data, isPending, error, success };
}
