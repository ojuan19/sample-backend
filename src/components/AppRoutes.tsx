import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainContent from './MainContent';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainContent} />
        {/* Future routes can be added here */}
      </Switch>
    </Router>
  );
};

export default AppRoutes;
