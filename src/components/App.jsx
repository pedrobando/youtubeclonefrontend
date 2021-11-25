import React, { useState, useEffect, setState } from "react";
import Header from "./Header/Header";
import { Container } from "react-bootstrap/";
import Hero from "./Hero/Hero";
import apikey from "../API_KEY/APIKEY"; 
import "./App.css";
import axios from "axios";
import RelatedVideos from "./RelatedVideos/RelatedVideos";

const App = () => {
  const [videoId, setVideoId] = useState('w7ejDZ8SWv8');
  const [video, setVideo] = useState({});
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);

  const getAllVideos = async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${apikey}&part=snippet`
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

  // Comments
  const getAllComments = async () => {
    await axios.get(`http://localhost:5500/api/comments/`)
    .then((res)=>{
        setComments(res.data);
    })
};

const newComments = async () => {
    await axios.post(`http://localhost:5500/api/comment/`)
    .then((res) => {});

};


  // end comments

  useEffect(() => {
    getAllVideos();
    getVideo();
    getAllComments();
  }, [videoId]);


  return (
    <Container>
      <Header></Header>
      <Hero video={video} videoId={videoId} comments={comments} setVideoId={setVideoId} videos={videos}></Hero>
      
    </Container>
  );
};

export default App;
