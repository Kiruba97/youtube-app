import React from "react";
import VideoItem from "./VideoItem";
import "./VideoItem.css";

const VideoList = ( {videos, onVideoSelect} ) => {

    const renderedList = videos.map( video => {
        return <div className="container"> <VideoItem key={video.id.videoId} video={video } onVideoSelect={onVideoSelect} /> </div>   
    });
    return <div> {renderedList} </div>
};

export default VideoList;