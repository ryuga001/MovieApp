import React, { useEffect, useState } from 'react'
import "./Banner.css"
function Banner() {
    const [movie,setmovie] = useState([]);
    const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=20438e716d11f50efe3914ac8db6c62a&language=en-US&page=1";
    useEffect(()=>{
        async function fetchdata() {
            const res = await fetch(url);
            const data =await  res.json();
            setmovie(
                data.results[Math.floor(Math.random()*data.results.length-1)]
            );
        }
        fetchdata();
    },[]);

    function truncate(str,n){
        return str?.length >n ? str.substr(0,n-1) + "..." : str;
    }

  return (
    <header className='banner'
            style={{
                backgroundSize : "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
                backgroundPosition : "center center",
            }}
    >
            <div className='banner__contents' >
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                    <h1 className="banner__description">{truncate(movie?.overview,150)}</h1>
                </div>
            </div>
            <div className='banner__fadeBottom'></div>
    </header>
  )
}

export default Banner