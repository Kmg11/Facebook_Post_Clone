import { useState } from "react";

export function useFetchPost() {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	function postData(url, data) {
		setIsPending(true);

		setTimeout(() => {
			fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			})
				.then((response) => {
					// Handling Errors From Server
					if (!response.ok) {
						throw Error("Could Not Fetch The Data For That Resource");
					}

					setIsPending(false);
					setSuccess(true);
					setError(null);
				})
				.catch((err) => {
					setIsPending(false);
					setError(err.message);
					setSuccess(null);
				});
		}, 1000);
	}

	return { postData, isPending, error, success };
}
