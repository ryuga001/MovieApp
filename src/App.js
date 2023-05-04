import './App.css';
import Banner from './component/Banner';
import Nav from './component/Nav';
import Row from './component/row/Row';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>

      <Row title = {"Trending"} 
        fetchUrl = {`https://api.themoviedb.org/3/trending/all/day?api_key=20438e716d11f50efe3914ac8db6c62a&language=en-US&page=1`}
        isLargerRow={true}
      />
      <Row title = {"Popular"} 
        fetchUrl = {`https://api.themoviedb.org/3/movie/popular?api_key=20438e716d11f50efe3914ac8db6c62a&language=en-US&page=1`}
      />
      <Row title = {"Top Rated"} 
        fetchUrl = {`https://api.themoviedb.org/3/movie/top_rated?api_key=20438e716d11f50efe3914ac8db6c62a&language=en-US&page=1`}
      />
      <Row title = {"Action"} 
        fetchUrl = {`https://api.themoviedb.org/3/discover/movie?api_key=20438e716d11f50efe3914ac8db6c62a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=28`}
      />
      <Row title = {"Comedy"} 
        fetchUrl = {`https://api.themoviedb.org/3/discover/movie?api_key=20438e716d11f50efe3914ac8db6c62a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=35`}
      />
      <Row title = {"Animation"} 
        fetchUrl = {`https://api.themoviedb.org/3/discover/movie?api_key=20438e716d11f50efe3914ac8db6c62a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=16`}
      />
      <Row title = {"Fantasy"} 
        fetchUrl = {`https://api.themoviedb.org/3/discover/movie?api_key=20438e716d11f50efe3914ac8db6c62a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=14`}
      />
      
    </div>
  );
}

export default App;
