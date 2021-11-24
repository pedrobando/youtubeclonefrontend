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
      <Hero videoId={apikey}></Hero>
      <RelatedVideos videos={videos}></RelatedVideos>
    </Container>
  );
};

export default App;
