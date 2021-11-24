import "./Hero.css";
import React from "react";
import {
  Row,
  Col,
} from "react-bootstrap/";
import YoutubePlayer from "../YoutubePlayer/YoutubePlayer";
import Comments from "../Comments/Comments";

const Hero = (props) => {
  const video = props.video;
  return (
    <Row className="row_hero">
      <Col xs={6} md={6} className="yt_player">
        <YoutubePlayer video={video.id}></YoutubePlayer>
      </Col>
      <Col xs={6} md={6}>
         {/* <h3>{video.snippet.title}</h3> */}
         <Comments></Comments>
      </Col>
    </Row>
  );
};

export default Hero;
