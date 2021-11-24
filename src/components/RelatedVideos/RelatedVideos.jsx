import React from "react";
import { Row, Col} from "react-bootstrap/";


const RelatedVideos = (videos) => {
    const videosList = videos.map();
    return ( 
        <Row className="related_videos">
            <Col xs={6} md={6}>
                <h3>Related Videos</h3>

            </Col>
        </Row>
     );
}
 
export default RelatedVideos;