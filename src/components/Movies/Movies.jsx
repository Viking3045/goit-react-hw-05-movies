import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
export const Movies = () => {
    // const [input, setInput] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchVideos, setSearchVideos]= useState([])
  // const [inputValue, setInputValue] = useState('');
    const location = useLocation();
  const searchQuery = searchParams.get('query');
   const [query, setQuery] = useState(() => searchQuery || '');
  // console.log(query)
    
  // const handleChange = e => {
  //   setInput(`${e.target.value}`);
  //   };
    

  // const search = e => {
  //   if (query === "") return;
  //   // if (input.trim() === '') {
  //   //   alert('Please enter something');
  //   //   return;
  //   // }
  //   e.preventDefault();
  //    const form = e.currentTarget;
  //   setSearchParams({ query: form.elements.query.value });
  //   form.reset();
  //   // setInputValue(input)
  //   // setSearchParams({ query: input })
  //   // setInput('');
      
  // };
  useEffect(() => {
    const fetch = require('node-fetch');

      const url =
          `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: 'GET',
        // query: `${inputValue}`,
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzFhZjI5NGU3NDk3NjY2M2ZlOTc0NGNhY2Q2MmUyMSIsInN1YiI6IjY0NmY5ZGU3NTQzN2Y1MDEwNTVjZDU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v0zxkgzjtHk6aWF38KvQBH5xDPkJSmehbRg0QNniLYg',
      },
      //   query: `${input}`,
    };
     
    searchQuery && fetch(url, options)
      .then(res => res.json())
      .then(json => {
        // console.log(json)
    setSearchVideos(json.results)
    })
      .catch(err => console.error('error:' + err));
  }, [searchQuery]);

  const handleChange = e => {
    setQuery(e.target.value);
  };
   const handleSubmit = e => {
     e.preventDefault();
    setSearchParams({ query: query });
  };
// const updateQueryString = (query) => {
//     const nextParams = query !== "" ? { query } : {};
//     setSearchParams(nextParams);
//   };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="input"
          type="text"
          autoComplete="off"
           onChange={handleChange}
           value={query}
          autoFocus
          placeholder="Search videos"
        />
        <button type="submit">Search</button>
          </form>
           <ul>
                  {
                searchVideos.length>0 &&(searchVideos.map(({ title,id}) => (
                  <li key={id}><Link to={`/movies/${id}`} state={{ from: location }}>{ title}</Link></li>
                ))
            )}
        </ul>
      {/* <MovieDetailsPages/> */}
    </>
  );
};
