import { useCallback, useEffect, useState, useRef } from "react";

export function useFetchGet(url) {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const abortCount = useRef(new AbortController());
	const abortCountCurrent = abortCount.current;

	const getData = useCallback(() => {
		setIsPending(true);

		setTimeout(() => {
			fetch(url, { signal: abortCountCurrent.signal })
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
		}, 500);
	}, [url, abortCountCurrent]);

	useEffect(() => {
		getData();
		return () => abortCountCurrent.abort();
	}, [abortCountCurrent, getData]);

	return { getData, data, isPending, error, success };
}
