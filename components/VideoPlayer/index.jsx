import PropTypes from "prop-types";

const VideoPlayer = ({ videoUrl, width }) => {
  return (
    <div>
      <iframe
        src={videoUrl}
        width={width}
        height={(width / 16) * 9}
        style={{ border: "none", overflow: "hidden" }}
      ></iframe>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default VideoPlayer;
