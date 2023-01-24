import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { getPosts } from './api/reddit';
import SearchForm from './features/SearchForm/SearchForm';
import Results from './features/Results/Results';
import { setQuery, setButtonClicked, setResults } from './store/redditSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const reddit = useSelector(state => state.reddit);
  const {query, buttonClicked, results} = reddit;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = ({target}) => {
    dispatch(setQuery(target.value));
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await getPosts(query);
      dispatch(setResults(response));
      if (buttonClicked === 'ImFeelingLucky') {
        window.location.href = response[0].data.url;
      } else if (buttonClicked === 'RedditSearch') {
        navigate(`results/${query}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SearchForm query={query} onChange={onChange} onSubmit={onSubmit} setButtonClicked={setButtonClicked} />} />
        <Route path="/results/:term" element={<Results results={results} setResults={setResults} />} />
      </Routes>
    </div>
  );
}

export default App;