import React from "react";
import PropTypes from "prop-types";

const Clocks = ({ clocksName, timezoneUTC, handleDelete }) => {
	return (
		<div>
			<div>
				<p className="clocks-name">{clocksName.city}</p>
				<p>{timezoneUTC.utcOffset(Number(clocksName.offset)).format("hh:mm:ss")}</p>
				<button className="button" onClick={() => handleDelete(clocksName.id)}>
					Close
				</button>
			</div>
		</div>
	);
};

Clocks.propTypes = {
	clocksName: PropTypes.shape({
		city: PropTypes.string,
		offset: PropTypes.string,
		id: PropTypes.string
	}).isRequired,
	timezoneUTC: PropTypes.object,
	handleDelete: PropTypes.func.isRequired
};

export default Clocks;
