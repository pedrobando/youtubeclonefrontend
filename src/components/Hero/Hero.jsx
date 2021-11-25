import "./Hero.css";
import React from "react";
import {
  Row,
  Col,
} from "react-bootstrap/";
import YoutubePlayer from "../YoutubePlayer/YoutubePlayer";
import Comments from "../Comments/Comments";

const Hero = (props) => {
  const videoId = props.videoId;
  const video = props.video;
  return (
    <Row className="row_hero">
      <Col xs={6} md={6} className="yt_player">
        <YoutubePlayer videoId={videoId}></YoutubePlayer>
      </Col>
      <Col xs={6} md={6}>
         
         <Comments comments={props.comments}></Comments>
      </Col>
    </Row>
  );
};

export default Hero;
