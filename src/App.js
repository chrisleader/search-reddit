import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await getPosts(query);
      setResults(response);
      navigate(`results/${query}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SearchForm query={query} onChange={onChange} onSubmit={onSubmit} />} />
        <Route path="/results/:term" element={<Results results={results} setResults={setResults} />} />
      </Routes>
    </div>
  );
}

export default App;