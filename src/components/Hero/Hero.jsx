import './Hero.css';
import React from 'react';
import {Container, Row, Col, Form, FormControl, Button} from 'react-bootstrap/';
import YoutubePlayer from '../YoutubePlayer/YoutubePlayer';

const Hero = (props) => {
    return ( 

            <Row className="row_hero">
                <Col xs={6} md={6} className="yt_player">
                    <YoutubePlayer video={props.video}></YoutubePlayer>
                </Col>
                <Col xs={6} md={6}>
                    
                </Col>
            </Row>
       
     );
}
 
export default Hero;