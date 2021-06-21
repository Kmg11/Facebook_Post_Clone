import { useEffect, useState } from "react";

export function useFetchDelete() {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [abortCoun] = useState(new AbortController());

	function deleteData(url, successFunction) {
		setIsPending(true);

		setTimeout(() => {
			fetch(url, {
				method: "DELETE",
				signal: abortCoun.signal,
			})
				.then((response) => {
					// Handling Errors From Server
					if (!response.ok) {
						throw Error("Could Not Fetch The Data For That Resource");
					}

					setIsPending(false);
					setSuccess(true);
					setError(null);
					successFunction();
				})
				.catch((err) => {
					if (err.name !== "AbortError") {
						setIsPending(false);
						setError(err.message);
						setSuccess(null);
					}
				});
		}, 500);
	}

	useEffect(() => {
		return () => abortCoun.abort();
	}, [abortCoun]);

	return { deleteData, isPending, error, success };
}
