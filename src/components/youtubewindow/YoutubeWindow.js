import React from "react";
import PropTypes from "prop-types";

import './YoutubeWindow.css'


const YoutubeWindow = ({ embedId }) => (
		<div className="video-responsive">
			<iframe
				// width="853"
				// height="480"
				width="auto"
				height="auto"
				src={`https://www.youtube.com/embed/${embedId}`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Embedded youtube"
			/>
		</div>
);

YoutubeWindow.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default YoutubeWindow
