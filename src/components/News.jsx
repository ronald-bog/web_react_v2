import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { useLocation } from 'react-router-dom';

export function News() {
    const location = useLocation();
    const [newsArray, setNewsArray] = useState([]);

    useEffect(() => {
        const jsonFile = location.pathname === '/ciencia' ? 'science.json' : 'pc.json';
        news(jsonFile);
    }, [location.pathname]);

    async function news(jsonFile) {
        const response = await api.news(jsonFile);
        setNewsArray(response.data.articles);
    }

    const formatData = (dateString) => {
        const months = [
            "enero", "febrero", "marzo", "abril",
            "mayo", "junio", "julio", "agosto",
            "septiembre", "octubre", "noviembre", "diciembre"
        ];
        const [year, month, day] = dateString.split('-').map(Number);
        const formattedDay = day < 10 ? ` ${day}` : day.toString();
        const formattedDate = `${formattedDay} de ${months[month - 1]} ${year}`;
        return formattedDate;
    };

    return (
        <>
            <div className="news">
                {newsArray.map((item, index) => (
                    <div key={index} className="card">
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <img className="img" src={item.urlToImage} width="355" height="236" alt="News" loading="lazy" />
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p className="author">
                                Fuente: {item.source.name} &nbsp;|&nbsp;
                                {item.author} &nbsp;|&nbsp;
                                {formatData(item.publishedAt.substring(0, 10))}
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}