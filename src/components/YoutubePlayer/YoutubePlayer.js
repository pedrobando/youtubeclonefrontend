import React from "react";
import './YoutubePlayer.css';

const YoutubePlayer = (props) => {
  const id = props.video;
  return (
        <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="player"
        allowFullScreen
        ></iframe>
  );
};

export default YoutubePlayer;
