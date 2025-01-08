import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Portfolio } from './pages';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Portfolio} />
      </Router>
    </div>
  );
};

export default App;
