import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setQuery, setSort, setTime, setResults } from './store/redditSlice';
import { getPosts } from './helpers/reddit';
import SearchForm from './features/SearchForm/SearchForm';
import Results from './features/Results/Results';
import Post from './features/Post/Post';

function App() {
  const { query, sort, time, buttonClicked } = useSelector(state => state.reddit);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onQueryChange = ({target}) => {
      dispatch(setQuery(target.value));
  }
  
  const onSortChange = ({target}) => {
      dispatch(setSort(target.value));
  } 

  const onTimeChange = ({target}) => {
      dispatch(setTime(target.value));
  } 

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await getPosts(query, sort, time);
    dispatch(setResults(response));
    if (buttonClicked === 'ImFeelingLucky') {
        window.location.href = response[0].data.url;
    } else if (buttonClicked === 'RedditSearch') {
        navigate(`results/?query=${query}&sort=${sort}&time=${time}`);
    }
    } catch (error) {
    console.log(error);
    }
}

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SearchForm onQueryChange={onQueryChange} onSubmit={onSubmit} />} />
        <Route path="/results/*" element={<Results onQueryChange={onQueryChange} onSortChange={onSortChange} onTimeChange={onTimeChange} onSubmit={onSubmit} />} />
        <Route path="/posts/:index" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;