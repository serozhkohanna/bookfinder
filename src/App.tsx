import React from 'react';
import './App.scss';
import { HOME_PAGE, SEARCH_PAGE } from "./constants/routes";
//@ts-ignore
import { Switch, Route, withRouter } from 'react-router-dom';

import MainPage from "./pages/MainPage/MainPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import Page404 from "./pages/404Page/404Page";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
	<div className="App">
	  <Header/>
	  <Switch>
		<Route exact path={HOME_PAGE} component={MainPage}/>
		<Route exact path={SEARCH_PAGE} component={SearchPage}/>
		<Route component={Page404}/>
	  </Switch>
	  <Footer/>
	</div>
  );
}

export default App;
