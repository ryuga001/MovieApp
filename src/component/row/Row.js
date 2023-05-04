import React, { useEffect, useState } from 'react'
import "./Row.css"
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
function Row({ title, fetchUrl, isLargerRow }) {
    const [results, setresults] = useState([])
    const [trailerUrl,setTrailerUrl] = useState("");
    useEffect(() => {
        fetchresults();
    }, [fetchUrl]);
    const fetchresults = async () => {
        const url = fetchUrl
        const res = await fetch(url)
        const data = await res.json();
        setresults(data.results);
    }
    // console.log(results)
    const opts = {
        height : "600",
        width : "100%",
        playerVars : {
            autoplay: 1,
        },
    };

    const handleClick = (element) =>{
        if(trailerUrl){
            setTrailerUrl(""); 
        }
        else{
            movieTrailer(element?.title || "").then(url=>{
                const urlParams = new URLSearchParams( new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((error)=>console.log(error));
        }
    }

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row-posters'>
                {
                    results.map((element) => {
                        return (
                            
                                <img key={element.id} 
                                onClick={()=>{
                                    handleClick(element)
                                }} className={`row-poster ${isLargerRow && "larger-poster-row"}`}
                                 src={`https://image.tmdb.org/t/p/original${isLargerRow ? element.poster_path : element.backdrop_path}`} alt={element.title} />
                                 
                             
                        )
                    })
                }
            </div>
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}
export default Row