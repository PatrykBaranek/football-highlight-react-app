import { useEffect, useState } from 'react';

// styles
import './MatchHighlight.css';

export default function MatchHighlight({ data }) {
	const [footballMatches, setFootballMatches] = useState([]);

	// console.log(...footballMatches);

	const formatDate = (date) => {
		const indexOfHourToCut = date.indexOf('T');
		return date.slice(0, indexOfHourToCut);
	};

	const formatVideoSrc = (video) => {
		const firstIndexOfSrc = video.indexOf('https');
		const lastIndexOfSrc = video.indexOf("' frame");
		// console.log(firstIndexOfSrc);
		return video.slice(firstIndexOfSrc, lastIndexOfSrc);
	};

	useEffect(() => {
		setFootballMatches(data.response);
	}, [data.response]);

	return (
		<>
			{footballMatches.map((match, index) => (
				<div key={index} className="competition-name">
					<p className="competition-title">{match.competition}</p>
					<div className="match-content">
						<div className="match-details">
							<p className="match-title">{match.title}</p>
							<p className="date">{formatDate(match.date)}</p>
							<div className="match-video">
								<iframe
									title={match.title}
									src={formatVideoSrc(match.videos[0].embed)}
								></iframe>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
