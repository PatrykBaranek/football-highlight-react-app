import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(url);
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				const json = await res.json();

				setIsLoading(false);
				setData(json);
				setError(null);
			} catch (err) {
				setIsLoading(false);
				setError(err.message);
				console.error(err.message);
			}
		};
		fetchData();
	}, [url]);

	return { data, isLoading, error };
};
