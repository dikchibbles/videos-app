import React, { useEffect, useState } from "react";
import useVideos from "../hooks/useVideos";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const { videos, search } = useVideos('hiphop');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos])

    return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoClick={setSelectedVideo} />
                    </div>
                </div>
            </div>    
        </div>
    )
}


// class App extends React.Component {
//     state = { 
//         videos: [],
//         selectedVideo: null
//     }

//     componentDidMount() {
//        this.onFormSubmit('hiphop')
//     }
    
//     onFormSubmit = async (term) => {
//         const response = await Youtube.get(`/search`, {
//             params: { 
//                 part: 'snippet',
//                 q: term,
//                 type: 'video'
//             }
//         })
//         const data = await response.data.items;
//         this.setState({ 
//             videos: data, 
//             selectedVideo: data[0]
//         })
//     }

//     onVideoSelect = (video) => {
//         this.setState({ selectedVideo: video });
//     } 

//     render() {
//         return (
//             <div className="ui container" style={{marginTop: '10px'}}>
//                 <SearchBar onSubmit={this.onFormSubmit} />
//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selectedVideo} />
//                         </div>
//                         <div className="five wide column">
//                             <VideoList videos={this.state.videos} onVideoClick={this.onVideoSelect} />
//                         </div>
//                     </div>
//                 </div>    
//             </div>
//         )
//     }
// }

export default App;