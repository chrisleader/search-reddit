import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { getPosts } from './helpers/reddit';
import SearchForm from './features/SearchForm/SearchForm';
import Results from './features/Results/Results';
import { setQuery, setResults } from './store/redditSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const {query, buttonClicked } = useSelector(state => state.reddit);
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
        <Route exact path="/" element={<SearchForm onChange={onChange} onSubmit={onSubmit} />} />
        <Route path="/results/:term" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;