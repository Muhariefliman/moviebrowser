import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
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
        <Route exact path="/" component={Home} />
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
