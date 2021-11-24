import React from "react";
import { Row, Col } from "react-bootstrap/";
import "./RelatedVideos.css";

const RelatedVideos = (props) => {
  const videos = props.videos;
  const videosListItems = videos.map(
    (videos, index) =>
      index < 3 && (
        <div className="related_videos_list_item">
          <div className="videoThumnail">
            <a href="">
              <img
                src={videos.snippet.thumbnails.default.url}
                alt={videos.snippet.title}
              />
            </a>
          </div>
          <h3>{videos.snippet.title}</h3>
          <span>{videos.snippet.channelTitle}</span>
          <br className="clear" />
        </div>
      )
  );
  console.log(videosListItems);
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
