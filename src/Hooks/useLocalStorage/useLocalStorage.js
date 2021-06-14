import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
	const [value, setValue] = useState(() => {
		const savedValue = JSON.parse(localStorage.getItem(key));

		if (savedValue !== null) return savedValue;
		if (initialValue instanceof Function) return initialValue();
		return initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}
