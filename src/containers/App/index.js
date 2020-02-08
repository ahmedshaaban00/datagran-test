import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from './styles';
import AppHeader from '../AppHeader';
import HomePage from '../../pages/home';
import LineGraphPage from '../../pages/line-graph';
import PostsPage from '../../pages/posts';

const App = () => (
  <Router>
    <Container>
      <AppHeader />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/line-graph">
          <LineGraphPage />
        </Route>
        <Route path="/posts">
          <PostsPage />
        </Route>
      </Switch>
    </Container>
  </Router>
);

export default App;
