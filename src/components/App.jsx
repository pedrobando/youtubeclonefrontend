import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import { Container } from "react-bootstrap/";
import Hero from "./Hero/Hero";
import apikey from "../API_KEY/APIKEY";
//import {Button, Card} from 'react-bootstrap/';
import "./App.css";
import axios from "axios";
import RelatedVideos from "./RelatedVideos/RelatedVideos";

const App = () => {
  const initialVideoId = { id: "w7ejDZ8SWv8" };
  const [videoId, setVideoId] = useState("w7ejDZ8SWv8");
  const [video, setVideo] = useState({});
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

  const getVideo = async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?key=${apikey}&id=${videoId}&part=snippet`
      )
      .then((res) => {
        setVideo(res.data.items[0]);
      });
  };

  useEffect(() => {
    getAllVideos();
    getVideo();
  }, [videoId]);


  return (
    <Container>
      <Header></Header>
      <Hero video={video}></Hero>
      <RelatedVideos videos={videos} setVideoId={setVideoId}></RelatedVideos>
    </Container>
  );
};

export default App;
