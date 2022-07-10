import { useEffect, useState } from "react";
import Youtube from "../api/Youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm])

    const search = async (term) => {
        const response = await Youtube.get(`/search`, {
            params: { 
                part: 'snippet',
                q: term,
                type: 'video'
            }
        })
        const data = await response.data.items;
        setVideos(data);
    }

    return { videos, search };
}

export default useVideos;

