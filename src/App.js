import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import 'styles/styles.css';

import routes from './routes';

function App() {
  return (
    <Router>
      {renderRoutes(routes)}
    </Router>
  );
}

export default App;
