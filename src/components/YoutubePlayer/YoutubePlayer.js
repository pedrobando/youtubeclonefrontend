import React from 'react';

const YoutubePlayer = (props) =>{
    return(
        <iframe id="ytplayer" type="text/html" width="640" height="360" src=`https://www.youtube.com/embed/${videoId}?autoplay=1`
  frameborder="0"></iframe>
    );

}

export default YoutubePlayer;