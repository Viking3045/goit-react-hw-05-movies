import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
// import { cast } from "components/Cast/Cast";

export const MovieDetails = () => {
  const [moreDetails, setMoreDetails] = useState({});

  const { movieId } = useParams();
  const location = useLocation();
  console.log(`location: ${location}`)
  const backLinkHref = location.state?.from;
  console.log(moreDetails)
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
   const getYear = releaseDate => {
    const date = new Date(releaseDate);
    return date.getFullYear();
  };
  return (
    <>
      <Link
        to={backLinkHref}
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
      <img src={`https://image.tmdb.org/t/p/w500${moreDetails.poster_path}`} alt="phot" />
      <h2>{moreDetails.title} ({getYear(moreDetails.release_date)})</h2>
      <p>userScore:{~~(moreDetails.vote_average*10)}%</p>
      <h2>Owerwiews</h2>
      <p>{moreDetails.overview}</p>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
