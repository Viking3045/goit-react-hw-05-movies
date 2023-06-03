import { NavLink, Route, Routes, Outlet } from 'react-router-dom';
// import{ Suspense} from 'react'
import { HomePages } from 'pages/HomePages/HomePages';
import { MoviesPages } from 'pages/MoviesPages/MoviesPages'
import { MovieDetails } from './MovieDetails/MovieDetails';
// import { Cast } from './Cast/Cast';
import { RewiewsPages } from 'pages/ReviewsPages/ReviewsPages';
import { CastPages } from 'pages/CastPages/CastPages';

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>  <NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/movies">Movies</NavLink></li>
        </ul>
      
        
      </nav>
      <Routes>
        <Route path="/" element={<HomePages/>} />
        <Route path="/movies" element={<MoviesPages/>}/> 
        <Route path="/movies/:movieId" element={< MovieDetails />}>
          <Route path="cast" element={<CastPages />} />
          <Route path="reviews" element={<RewiewsPages/> } />
        </Route>
      </Routes>
        <Outlet />
    </div>
  );
};
