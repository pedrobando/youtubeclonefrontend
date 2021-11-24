import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import { Container } from "react-bootstrap/";
import Hero from "./Hero/Hero";
import apikey from "../API_KEY/APIKEY";
//import {Button, Card} from 'react-bootstrap/';
import "./App.css";
import axios from "axios";
import RelatedVideos from "./RelatedVideos/RelatedVideos";
import YoutubePlayer from "./YoutubePlayer/YoutubePlayer";

const App = () => { 
  const [video, setVideo] = useState(["w7ejDZ8SWv8"]);
  const [videos, setVideos] = useState([]);

  const getAllVideos = async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?q=react+tutorial&key=${apikey}&part=snippet`
      )
      .then((res) => {
        setVideos(res.data.items);
      });
  };


  useEffect(() => {
    getAllVideos();
  }, []);

  return (
    <Container>
      <Header></Header>
      <Hero video={video}>
      </Hero>
      <RelatedVideos videos={videos}></RelatedVideos>
    </Container>
  );
};

export default App;
