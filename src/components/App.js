import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component {
    state = { 
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
       this.onFormSubmit('hiphop')
    }
    
    onFormSubmit = async (term) => {
        const response = await Youtube.get(`/search`, {
            params: { 
                part: 'snippet',
                q: term,
                type: 'video'
            }
        })
        const data = await response.data.items;
        this.setState({ 
            videos: data, 
            selectedVideo: data[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    } 

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onFormSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoClick={this.onVideoSelect} />
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default App;