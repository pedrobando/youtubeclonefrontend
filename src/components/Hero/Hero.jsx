import "./Hero.css";
import React, { useState, useEffect, setState } from "react";
import {
  Row,
  Col,
} from "react-bootstrap/";
import YoutubePlayer from "../YoutubePlayer/YoutubePlayer";
import Comments from "../Comments/Comments";
import RelatedVideos from "../RelatedVideos/RelatedVideos";

const Hero = (props) => {
  const videos = props.videos;
  const setVideoId = props.setVideoId;
  const videoId = props.videoId;
  const video = props.video;
  return (
    <Row className="row_hero">
      <Col xs={6} md={6} className="yt_player">
        <YoutubePlayer videoId={videoId}></YoutubePlayer>
        <RelatedVideos videos={props.videos} setVideoId={setVideoId} videoId={videoId}></RelatedVideos>
      </Col>
      <Col xs={6} md={6}>
        <div className="video-info">
       <h1>{props.video.snippet.title}</h1>
       <span>{props.video.snippet.channelTitle}</span>
       <p>{props.video.snippet.description}</p>
       
        </div>
         <Comments comment={props.comment} setComment={props.setComment} comments={props.comments} videoId={videoId} newComment={props.newComment}></Comments>
      </Col>
    </Row>
  );
};

export default Hero;
