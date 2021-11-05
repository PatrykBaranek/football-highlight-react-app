import { useState, useEffect } from 'react';

export default function SearchMatchesForm({ data }) {
	const [competitionNameList, setCompetitionNameList] = useState([]);

	// console.log(competitionNameList);

	useEffect(() => {
		const competitionNameArray = data.response.map(
			(competitionTitle) => competitionTitle.competition
		);

		const singleCompetitionName = () => {
			const array = competitionNameArray;
			const sortedArray = array.sort();

			// TODO reduce the competition names to single one
			const singleSortedArray = sortedArray.filter((arrItem) => arrItem);

			console.log('sorted', sortedArray);
			console.log('final', singleSortedArray);

			return singleSortedArray;
		};

		singleCompetitionName();

		setCompetitionNameList(competitionNameArray);
	}, [data.response]);

	return (
		<div className="select-container">
			<select>
				{competitionNameList.map((competitionName) => (
					<option value={competitionName}>{competitionName}</option>
				))}
			</select>
		</div>
	);
}
