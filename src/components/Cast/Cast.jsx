import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  // console.log(movieId)
  //    const location = useLocation();
  // const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    const fetch = require('node-fetch');

    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzFhZjI5NGU3NDk3NjY2M2ZlOTc0NGNhY2Q2MmUyMSIsInN1YiI6IjY0NmY5ZGU3NTQzN2Y1MDEwNTVjZDU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v0zxkgzjtHk6aWF38KvQBH5xDPkJSmehbRg0QNniLYg',
      },
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setCast(json.cast)
            // console.log(json);
      })
      .catch(err => console.error('error:' + err));
  }, [movieId]);
  // console.log(cast);
  return (
    <ul>
      {cast.map(({name,character, profile_path, id}) => (
        <li key={id}>
            <img  src={`https://image.tmdb.org/t/p/w92${profile_path}`} alt="phot" />
          <p>{name}</p>
          <p>Character:  {character }</p>
        </li>
       ))} 
    </ul>
   
  );
};
