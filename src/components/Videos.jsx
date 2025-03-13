import { useState, useEffect } from 'react';
import { api } from '../services/api';

export const Videos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        videosApi();
    }, []);

    async function videosApi() {
        const response = await api.videos();
        setVideos(response.data.videos);
    }

    return (
        <>
            <div className="videos">
                {videos.map((item, index) => (
                    <div key={index} className="video">
                        <a href={`https://youtu.be/${item}`} target="_blank" rel="noopener noreferrer">
                            <img className="img"
                                src={`../../../assets/videos/${item}.webp`}
                                width="640" height="360" alt="Cursos de programación y desarrollo de software" loading="lazy" />
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}