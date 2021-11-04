import { useFetch } from "../hooks/useFetch";

// styles
import "./Main.css";

// components
import MatchHighlight from "./MatchHighlight";
import SelectCompetition from "./SelectCompetition";

export default function Main() {
	const { data, isLoading, error } = useFetch(
		"https://www.scorebat.com/video-api/v3/"
	);
	return (
		<main className="main">
			{/* search input */}
			<SelectCompetition />
			{/* all content */}
			{error && <p className="error">{error}</p>}
			{isLoading && <p className="loading">Loading...</p>}
			{data && <MatchHighlight data={data} />}
		</main>
	);
}
