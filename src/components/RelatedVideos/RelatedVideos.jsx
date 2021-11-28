import React from "react";
import { Row, Col, Button } from "react-bootstrap/";
import "./RelatedVideos.css";

const RelatedVideos = (props) => {
  const videos = props.videos;
  const setVideoId = props.setVideoId;

  return (
    <Row className="related_videos">
      <Col xs={6} md={6}>
        <h3>React Related Videos</h3>
        {videos.slice(1,5).map((video) => (
          
          <div className="related_videos_list_item" key={video.id.videoId}>
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
        ))}
      </Col>
    </Row>
  );
};

export default RelatedVideos;
