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
			}).then(
				(response) => {
					setIsPending(false);
					setSuccess(true);
					setError(false);
				},
				(error) => {
					setIsPending(false);
					setError(error.message);
					setSuccess(false);
				}
			);
		}, 1000);
	}

	return { postData, isPending, error, success };
}
