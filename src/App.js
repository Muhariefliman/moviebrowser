import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Home from './component/HomeView';
import AboutView from './component/AboutView';
import { Switch, Route } from 'react-router';
import  SearchView from './component/SearchView';
import MovieView from './component/MovieView';
import ErrorView from './component/ErrorView';
function App() {

  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect( () => {
    if(searchText){
      fetch('https://api.themoviedb.org/3/search/movie?api_key=fa2e05195b4a34dc09b9a2ec49377fae&language=en-US&query=' + searchText + '&page=1&include_adult=false')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSearchResult(data.results);
      })
    }
  }, [searchText]);

  const [topRated, setTopRated] = useState([]);

  const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

  useEffect( () => {
    fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTJlMDUxOTViNGEzNGRjMDliOWEyZWM0OTM3N2ZhZSIsInN1YiI6IjYyMTMwNmFhMDNmMGI2MDAxYjZiNTQ1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7StC4xaES4ObjPkrBogo0yeJHTZLRTyH1eXCK9yzQy8'
      }
    })
    .then(response => response.json())
    .then(data => {
      // console.log(data.results);
      setTopRated(data.results);
    })
  }, [topRated])
  
  // console.log(searchText, "is The Default")
  // setTimeout(() => {
  //   setSearchText("New Text");
  //   console.log(searchText, "is The New Text");
  // }, 2000);

  // TMDb API Key
  // fa2e05195b4a34dc09b9a2ec49377fae
  // https://api.themoviedb.org/3/movie/550?api_key=fa2e05195b4a34dc09b9a2ec49377fae
  



  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Switch>
        <Route exact path="/">
          <Home topRated={topRated} />
        </Route>
        <Route exact path='/About' component={AboutView} />
        <Route exact path='/Search'>
          <SearchView keyword={searchText} searchResult={searchResult} />
        </Route>
        <Route exact path='/Movie/:id' component={MovieView} />
        <Route path='*' component={ErrorView} />
      </Switch>
    </div>
  );
}

export default App;
