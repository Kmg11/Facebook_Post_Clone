import { useEffect, useState } from "react";

export function useFetchPatch() {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [abortCoun] = useState(new AbortController());

	function updateData(url, data, successCallback, errorCallback) {
		setIsPending(true);

		fetch(url, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
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

				if (successCallback instanceof Function) successCallback();
			})
			.catch((err) => {
				if (err.name !== "AbortError") {
					setIsPending(false);
					setError(err.message);
					setSuccess(null);

					if (errorCallback instanceof Function) errorCallback();
				}
			});
	}

	useEffect(() => {
		return () => abortCoun.abort();
	}, [abortCoun]);

	return { updateData, isPending, error, success };
}
