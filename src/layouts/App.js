import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import ArticleCreate from './ArticleCreate';
import ArticleDetail from './ArticleDetail';
import ArticleList from './ArticleList';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/articles/create">
            <ArticleCreate />
          </Route>
          <Route path="/articles/:id">
            <ArticleDetail />
          </Route>
          <Route path="/articles">
            <ArticleList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
