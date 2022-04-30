import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="container" >
            <div className="card card__body">
                <div className="user">
                    <img alt="hello" src={video.snippet.thumbnails.medium.url} />
                </div>
                    {video.snippet.title}
            </div>
        </div>
    );
}

export default VideoItem;