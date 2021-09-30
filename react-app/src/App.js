import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './components/User/User';
import { authenticate } from './store/session';
import Home from './components/Home';
import SearchQuestions from './components/Search-Questions'
import NavBar from './components/NavBar';
import {getCategories} from './store/categories'
import {getGenres} from './store/genres'
import Footer from './components/Footer';
import AboutUs from './components/About-Us/about-us';
import NotFound from './components/NotFound';



function App() {
  const [loaded, setLoaded] = useState(false);
  const [gamesLoaded, setGamesLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getCategories())
      await dispatch(getGenres())
      setLoaded(true);
      setGamesLoaded(true);
    })();
    

  }, [dispatch]);


  const categoriesSlice = useSelector(state => state.categories)
  const genresSlice = useSelector(state => state.genres)
  const categories = Object.values(categoriesSlice)
  const genres = Object.values(genresSlice)


  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar user={user}/>
      <div className="main">
        <Switch>
          <Route path='/login' exact={true}>
            <LoginForm />
          </Route>
          <Route path='/sign-up' exact={true}>
            <SignUpForm />
          </Route>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <User user={user}/>
          </ProtectedRoute>
          <Route path='/search-questions'>
            <SearchQuestions user={user} gamesLoaded={gamesLoaded} categories={categories} genres={genres}/>
          </Route>
          <Route path='/' exact={true}>
            <Home user={user}/>
          </Route>
          <Route path="/about-us" exact={true}>
            <AboutUs/>
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </div> 
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
