import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// React Router
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

// Calcite React
import CalciteThemeProvider from 'calcite-react/CalciteThemeProvider';

// PWA
import registerServiceWorker from './registerServiceWorker';

// App-specific
import { homepage } from '../package.json';
import './index.css';

let basename;
process.env.NODE_ENV !== 'production' ? (basename = '') : (basename = homepage);

// Render application
ReactDOM.render(
  <CalciteThemeProvider>
    <BrowserRouter basename={basename}>
      <Route path="/" component={App} />
    </BrowserRouter>
  </CalciteThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
