import React from "react";

const VideoDetail = ({video}) => {
    if(!video){
        return <div className="ui segment">Loading...</div>
    }
    
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return (
        <div >
            <iframe title ="streamer" 
                    src = {videoSrc}
                    width="740" height="400" frameborder = "0"/>
                    
            <div style={{padding: 15, marginRight:20, marginBottom:20}} className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4> 
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;