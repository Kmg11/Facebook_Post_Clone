import { useEffect, useState } from "react";

export function useFetchGet(url) {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			fetch(url)
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
					setIsPending(false);
					setError(err.message);
					setSuccess(null);
				});
		}, 1000);
	}, [url]);

	return { data, isPending, error, success };
}
