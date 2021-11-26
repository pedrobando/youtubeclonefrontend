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
  const initialState = {
    "id": "w7ejDZ8SWv8",
    "snippet": {
        "title": "React JS Crash Course 2021",
        "channelTitle": "Traversy Media",
        "description": "Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, working with an API and more.\n\nCode:\nhttps://github.com/bradtraversy/react-crash-2021\n\nReact & Other Course Links at - https://traversymedia.com\n\n💖  Support The Channel!\nhttp://www.patreon.com/traversymedia\n\nTimestamps:\n0:00 - Intro & Slides\n12:37 - Create a React app\n14:52 - Files & folders\n18:54 - App component & JSX\n22:39 - Expressions in JSX\n23:49 - Creating a component\n27:18 - Component Props\n28:50 - PropTypes\n30:42 - Styling\n34:17 - Button Component\n37:46 - Events\n40:18 - Tasks Component\n41:03 - Create a list with .map()\n43:07 - State & useState Hook\n44:55 - Global state\n46:52 - Task Component\n49:30 - Icons with react-icons\n51:41 - Delete task & prop drilling\n55:50 - Optional message if no tasks\n56:58 - Toggle reminder & conditional styling\n1:03:13 - Add Task Form\n1:06:16 - Form input state (controlled components)\n1:09:18 - Add task submit\n1:14:36 - showAddTask state\n1:15:58 - Button toggle\n1:19:33 - Build for production\n1:21:51 - JSON Server\n1:25:53 - useEffect Hook & Fetch tasks from server\n1:30:13 - Delete task from server\n1:31:51 - Add task to server\n1:35:15 - Toggle reminder on server\n1:39:15 - Routing, footer & about"
    },
    "statistics": {
        "viewCount": "1646280",
        "likeCount": "38285",
        "dislikeCount": "317"
    }
  }
  const initialVideosState =[
      {
        "id": {
          "videoId": "khhk"
        },
        "snippet": {
          "title": "Initial Title",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Dorf8i6lCuk/default.jpg"
            }
          },
          "channelTitle": "Academind"
        }
      },
  ];
  
  
  const [video, setVideo] = useState(initialState);
  const [videos, setVideos] = useState(initialVideosState);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({});

  const getAllVideos = async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${apikey}&maxResults=4&part=snippet&fields=items(id,snippet(title, description, channelTitle, thumbnails(default(url))))`
      )
      .then((res) => {
        setVideos(res.data.items);
      });
  };

  const getVideo = async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apikey}&fields=items(id,snippet(title, description, channelTitle,thumbnails(default(url))),statistics(viewCount, likeCount, dislikeCount))&part=snippet,statistics`
      )
      .then((res) => {
        setVideo(res.data.items[0]);
      });
  };

  // Comments
  const getAllComments = async () => {
    await axios.get(`http://localhost:5500/api/comments/${videoId}`)
    .then((res)=>{
        setComments(res.data);
    })
};

const newComment = async (comment) => {
    await axios.post(`http://localhost:5500/api/comments/`,
    comment)
    .then((res) => {
      setComments(comment);
      console.log(res.data)
    });
    comment.preventDefault();

};

useEffect(() => {
    getVideo();
    getAllVideos();
    getAllComments();
  }, [videoId, videos]);


  return (
    <Container>
      <Header></Header>
      <Hero video={video} videoId={videoId} comments={comments} setVideoId={setVideoId} videos={videos} newComment={newComment} comment={comment} setComment={setComment}></Hero>
    </Container>
  );
};

export default App;
