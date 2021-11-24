import React from "react";
import './YoutubePlayer.css';

const YoutubePlayer = (props) => {
  const videoId = props.video;
  const apikey = props.apikey;
  return (
        <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="player"
        allowfullscreen
        ></iframe>
  );
};

export default YoutubePlayer;
