import React from 'react';
import {Switch , Route} from 'react-router-dom';
import './App.scss';
import FooterComponent from './components/footer/FooterComponent';
import About from './pages/about/AboutpageComponent';
import Blog from './pages/blogpage/BlogpageComponent';
import Contact from './pages/contact/ContactpageComponent';
import CreateRecipe from './pages/createrecipe/CreateRecipeComponent';
import Error from './pages/error/ErrorpageComponent';
import Home from './pages/homepage/HomepageComponent';
import Recipe from './pages/recipepage/RecipepageComponent';

function App() {
  return (
    <>
      <Switch>
        <Route exact path = '/' component= {Home}/>
        <Route path = '/blogs' component = {Blog}/>
        <Route path = '/about' component = {About} />
        <Route path = '/contact' component = {Contact} />
        <Route path = '/recipe' component = {CreateRecipe} />
        <Route path = '/:type/:name' component = {Recipe}/>
        <Route component = {Error}/>
      </Switch>
      <FooterComponent/>
    </>
  );
}

export default App;
