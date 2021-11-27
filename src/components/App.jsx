import React, { useState, useEffect, setState } from "react";
import Header from "./Header/Header";
import { Container } from "react-bootstrap/";
import Hero from "./Hero/Hero";
import apikey from "../API_KEY/APIKEY";
import "./App.css";
import axios from "axios";
import RelatedVideos from "./RelatedVideos/RelatedVideos";

const App = () => {
  const [videoId, setVideoId] = useState("w7ejDZ8SWv8");
  const [video, setVideo] = useState([]);
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({});

  const getAllVideos = async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${apikey}&maxResults=4&part=snippet&channelId=UC29ju8bIPH5as8OGnQzwJyA&fields=items(id,snippet(title, description, channelTitle, thumbnails(default(url))))`
      )
      .then((res) => {
        setVideos(res.data.items);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  const getVideo = async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apikey}&fields=items(id,snippet(title, description, channelTitle,thumbnails(default(url))),statistics(viewCount, likeCount, dislikeCount))&part=snippet,statistics`
      )
      .then((res) => {
        setVideo(res.data.items[0]);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  // Comments
  const getAllComments = async () => {
    await axios
      .get(`http://localhost:5500/api/comments/${videoId}`)
      .then((res) => {
        setComments(res.data);
      });
  };

  const newComment = async (comment) => {
    await axios
      .post(`http://localhost:5500/api/comments/`, comment)
      .then((res) => {
        setComments(comment);
      });
    getAllComments();
  };

  const editComment = async (comment, commentId) => {
    await axios
      .put(`http://localhost:5500/api/comments/${commentId}`, comment)
      .then(() => {})
      .catch(function (error) {
        console.log(error);
      });
    getAllComments();
  };

  const editReply = async (reply, commentId, replyId) => {
    await axios
      .put(
        `http://localhost:5500/api/comments/${commentId}/replies/${replyId}`,
        reply
      )
      .then(() => {
        console.log(reply);
        getAllComments();
      })
      .catch(function (error) {
        console.log(error);
      });
    
  };

  useEffect(() => {
    console.log("Effects is running");
    getVideo();
    getAllVideos();
    getAllComments();
  }, [videoId]);

  return (
    <Container>
      <Header></Header>
      <Hero
        video={video}
        videoId={videoId}
        comments={comments}
        setVideoId={setVideoId}
        videos={videos}
        newComment={newComment}
        comment={comment}
        setComment={setComment}
        editComment={editComment}
        editReply={editReply}
      ></Hero>
    </Container>
  );
};

export default App;
