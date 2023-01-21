import { Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { getPosts } from './api/reddit';
import { useState } from 'react';
import SearchForm from './features/SearchForm/SearchForm';
import Results from './features/Results/Results';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const onChange = ({target}) => {
    setQuery(target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getPosts(query)
      .then(response => {
        setResults(response);
        navigate('/results');
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SearchForm query={query} onChange={onChange} onSubmit={onSubmit} />} />
        <Route path="/results" element={<Results results={results}/>} />
      </Routes>
    </div>
  );
}

export default App;