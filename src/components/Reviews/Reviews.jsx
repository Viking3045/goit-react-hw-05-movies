import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

export const Reviews = () => {
 const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
        const fetch = require('node-fetch');

const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
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
        setReviews(json.results)
            console.log(json);
      })
  .catch(err => console.error('error:' + err));
    },[movieId])
    return (
         <ul>
      {reviews.map(({author, id, content
}) => (
          <li key={id}>
           
              <h3>author:  {author}</h3>
              <p>{content }</p>
        </li>
       ))} 
    </ul>
    )
}