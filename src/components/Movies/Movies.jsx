import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export const Movies = () => {
    const [input, setInput] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [searchVideos, setSearchVideos]= useState([])
    //  const [inputValue, setInputValue] = useState('');
    
  const handleChange = e => {
    setInput(`${e.target.value}`);
    };
    

  const search = e => {
    if (input.trim() === '') {
      alert('Please enter something');
      return;
    }
    e.preventDefault();

    setInputValue(input)
    setInput('');
      
  };
    
    
    // console.log(inputValue)
    
    
  useEffect(() => {
    const fetch = require('node-fetch');

      const url =
          `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: 'GET',
        query: `${inputValue}`,
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzFhZjI5NGU3NDk3NjY2M2ZlOTc0NGNhY2Q2MmUyMSIsInN1YiI6IjY0NmY5ZGU3NTQzN2Y1MDEwNTVjZDU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v0zxkgzjtHk6aWF38KvQBH5xDPkJSmehbRg0QNniLYg',
      },
      //   query: `${input}`,
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        // console.log(json)
    setSearchVideos(json.results)
    })
      .catch(err => console.error('error:' + err));
  }, [inputValue]);

  return (
    <>
      <form onSubmit={search} action="">
        <input
          name="input"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          value={input}
          autoFocus
          placeholder="Search videos"
        />
        <button type="submit">Search</button>
          </form>
           <ul>
 {
                searchVideos.map(({ title,id}) => (
                    <li key={id}><Link  to={`/movies/:${id}`}>{ title}</Link></li>
                ))
            }
        </ul>
      {/* <MovieDetailsPages/> */}
    </>
  );
};
