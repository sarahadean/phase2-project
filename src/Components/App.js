import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Country from './Country';
import BucketList from './BucketList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/country/:countryName" component={Country} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;