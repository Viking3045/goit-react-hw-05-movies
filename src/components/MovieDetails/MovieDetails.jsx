import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import { cast } from "components/Cast/Cast";

export const MovieDetails = () => {
  const [moreDetails, setMoreDetails] = useState({});

  const { movieId } = useParams();
  // console.log(movieId)
  useEffect(() => {
    const fetch = require('node-fetch');

    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
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
        setMoreDetails(json);
      })
      .catch(err => console.error('error:' + err));
  }, [movieId]);

  // console.log(moreDetails.poster_path);
  return (
    <>
      <Link
        to="/"
        style={{
          margin: 8,
          padding: '12px 16px',
          borderRadius: 4,
          backgroundColor: 'gray',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Go back
      </Link>
      <img src={moreDetails.poster_path} alt="" />
      <h2>{moreDetails.title}</h2>
      <p>userScore:{moreDetails.popularity}%</p>
      <h2>Owerwiews</h2>
      <p>{moreDetails.overview}</p>
      <p>Genres</p>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
