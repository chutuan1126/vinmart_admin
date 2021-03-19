import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import 'styles/styles.css';

import MainLayout from 'pages/main';

import routes from './routes';

function App() {
  return (
    <Router>
      <MainLayout>
        {renderRoutes(routes)}
      </MainLayout>
    </Router>
  );
}

export default App;
