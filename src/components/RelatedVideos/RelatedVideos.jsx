import React, { useState, useEffect, setState } from "react";
import { Row, Col, Button } from "react-bootstrap/";
import "./RelatedVideos.css";

const RelatedVideos = (props) => {
  const videos = props.videos;
  const videoId = props.videoId;
  const setVideoId = props.setVideoId;
  const videosListItems = videos.slice(0,3).map(
    (video) =>(
        <div className="related_videos_list_item" key={video._id}>
          <div className="videoThumnail">
            <Button onClick={() => setVideoId(video.id.videoId)}>
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
              />
            </Button>
          </div>
          <h3>{video.snippet.title}</h3>
          <span>{video.snippet.channelTitle}</span>
          <br className="clear" />
        </div>
      )
  );

  return (
    <Row className="related_videos">
      <Col xs={6} md={6}>
        <h3>React Related Videos</h3>
        {videosListItems}
      </Col>
    </Row>
  );
};

export default RelatedVideos;
