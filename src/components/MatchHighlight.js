export default function MatchHighlight({ data }) {
	const footballMatches = [...data.response];
	console.log(footballMatches);

	return (
		<>
			{footballMatches.map((match, index) => (
				<div key={index} className="competition-name">
					<p className="competition-title">{match.competition}</p>
					<div className="match-content">
						<div className="match-details">
							<p className="match-title">{match.title}</p>
							<p className="date">{match.date.toLocaleString()}</p>
							<div className="match-video">{match.videos[0].embed}</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
