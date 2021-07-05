import { useEffect, useState } from "react";

export function useFetchDelete() {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [abortCoun] = useState(new AbortController());

	function deleteData(url, successCallback, errorCallback) {
		setIsPending(true);

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
				successCallback();

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

	return { deleteData, isPending, error, success };
}
