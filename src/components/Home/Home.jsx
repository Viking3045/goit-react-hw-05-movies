import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
// import { json } from 'react-router-dom';

// import { MovieDetails } from 'components/MovieDetails/MovieDetails'
export const Home = () => {
  const location = useLocation();
    const [videos, setVideos] = useState([]);
    useEffect(() => {
const fetch = require('node-fetch');
const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzFhZjI5NGU3NDk3NjY2M2ZlOTc0NGNhY2Q2MmUyMSIsInN1YiI6IjY0NmY5ZGU3NTQzN2Y1MDEwNTVjZDU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v0zxkgzjtHk6aWF38KvQBH5xDPkJSmehbRg0QNniLYg'
  }
};

fetch(url, options)
  .then(res => res.json())
    .then(json => {
        // console.log(json)
    setVideos(json.results)
       
    }  )
        .catch(err => console.error('error:' + err));
     
     },[])
   console.log(videos)

    return (
        <><ul>
 {
                videos.map(({ title,id}) => (
                  <li key={id}><Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link></li>
                  
                ))
            }
        </ul>
           
        </>   
    )
}