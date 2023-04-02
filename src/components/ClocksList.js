import React from "react";
import PropTypes from "prop-types";
import WatchItem from "./Clocks";

const ClocksList = ({ clocksList, timezoneUTC, handleDelete }) => {
	return (
		<div>
			<div>
				{clocksList.map(clocksName => (
					<WatchItem
						key={clocksName.id}
						clocksName={clocksName}
						timezoneUTC={timezoneUTC}
						handleDelete={handleDelete}
					/>
				))}
			</div>
		</div>
	);
};

ClocksList.propTypes = {
	clocksList: PropTypes.arrayOf(
		PropTypes.shape({
			city: PropTypes.string,
			offset: PropTypes.string,
			id: PropTypes.string
		}).isRequired
	).isRequired,
	timezoneUTC: PropTypes.object,
	handleDelete: PropTypes.func.isRequired
};

export default ClocksList;
