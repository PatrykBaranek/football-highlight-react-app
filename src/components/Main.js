import { useFetch } from '../hooks/useFetch';

// styles
import './Main.css';
import MatchHighlight from './MatchHighlight';

export default function Main() {
	const { data, isLoading, error } = useFetch(
		'https://www.scorebat.com/video-api/v3/'
	);
	return (
		<main className="main">
			{/* search input */}
			{/* all content */}
			{error && <p className="error">{error}</p>}
			{isLoading && <p className="loading">Loading...</p>}
			{data && <MatchHighlight data={data} />}
		</main>
	);
}
