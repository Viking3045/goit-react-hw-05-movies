import {  Route, Routes, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import{ Suspense} from 'react'
// import { MoviesPages } from 'pages/MoviesPages/MoviesPages'
import { MovieDetails } from './MovieDetails/MovieDetails';
// // import { Cast } from './Cast/Cast';
// import { RewiewsPages } from 'pages/ReviewsPages/ReviewsPages';
// import { CastPages } from 'pages/CastPages/CastPages';
const HomePages = lazy(() => import('pages/HomePages/HomePages'));
const MoviesPages = lazy(() => import('pages/MoviesPages/MoviesPages'));
// const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const ReviewsPages = lazy(() => import('pages/ReviewsPages/ReviewsPages'));
const CastPages = lazy(() => import('pages/CastPages/CastPages'));

// import { HomePages } from 'pages/HomePages/HomePages';

export const App = () => {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>  <NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/movies">Movies</NavLink></li>
        </ul>
      
        
      </nav> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePages />} />
          <Route path="/movies" element={<MoviesPages />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastPages />} />
            <Route path="reviews" element={<ReviewsPages />} />
          </Route>
        </Route>
      </Routes>{' '}
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
