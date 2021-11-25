import React from "react";
import { Row, Col } from "react-bootstrap/";
import "./RelatedVideos.css";

const RelatedVideos = (props) => {
  const videos = props.videos;
  const videoId = props.videoId;
  const setVideoId = props.setVideoId;
  const videosListItems = videos.map(
    (video, i) =>
      i < 3 && (
        <div className="related_videos_list_item" key={i}>
          <div className="videoThumnail">
            <a href="" onClick={() => setVideoId(prevVideoId => video.id)}>
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
              />
            </a>
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
        <h3> React Related Videos</h3>
        {videosListItems}
      </Col>
    </Row>
  );
};

export default RelatedVideos;
