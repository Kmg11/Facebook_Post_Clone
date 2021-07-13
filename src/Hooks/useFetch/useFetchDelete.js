import { useEffect, useRef, useState } from "react";

export function useFetchDelete() {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const abortCount = useRef(new AbortController());
	const abortCountCurrent = abortCount.current;

	function deleteData(url, successCallback, errorCallback) {
		setIsPending(true);

		fetch(url, {
			method: "DELETE",
			signal: abortCount.signal,
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
		return () => abortCountCurrent.abort();
	}, [abortCountCurrent]);

	return { deleteData, isPending, error, success };
}
