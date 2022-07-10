import React from "react";
import uniqid from "uniqid";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
    render () {
        const videos = this.props.videos.map(video => {
            return <VideoItem key={uniqid()} video={video} onVideoClick={this.props.onVideoClick} />
        })

        return(
            <div className="ui relaxed divided list">{ videos }</div>
        )   
    }
}

export default VideoList;



