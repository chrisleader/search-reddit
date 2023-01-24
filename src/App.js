import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { getPosts } from './api/reddit';
import SearchForm from './features/SearchForm/SearchForm';
import Results from './features/Results/Results';
import { setQuery, setButtonClicked, setResults } from './store/redditSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const reddit = useSelector(state => state.reddit);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = ({target}) => {
    dispatch(setQuery(target.value));
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await getPosts(reddit.query);
      dispatch(setResults(response));
      if (reddit.buttonClicked === 'ImFeelingLucky') {
        window.location.href = response[0].data.url;
      } else if (reddit.buttonClicked === 'RedditSearch') {
        navigate(`results/${reddit.query}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SearchForm query={reddit.query} onChange={onChange} onSubmit={onSubmit} setButtonClicked={setButtonClicked} />} />
        <Route path="/results/:term" element={<Results results={reddit.results} setResults={setResults} />} />
      </Routes>
    </div>
  );
}

export default App;