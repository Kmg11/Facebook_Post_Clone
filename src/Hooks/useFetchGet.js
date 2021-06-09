import { useEffect, useState } from "react";

export function useFetchGet(url, initialValue) {
	const [data, setData] = useState(initialValue);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			fetch(url)
				.then((response) => response.json())
				.then(
					(data) => {
						setData(data);
						setSuccess(true);
						setError(false);
						setIsPending(false);
					},
					(error) => {
						setError(error);
						setSuccess(false);
						setIsPending(false);
					}
				);
		}, 1000);
	}, [url]);

	return { data, isPending, error, success };
}
