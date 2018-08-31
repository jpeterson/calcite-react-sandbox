import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// React Router
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

// Calcite React
import { ThemeProvider } from 'styled-components';
import CalciteTheme from 'calcite-react/theme/CalciteTheme';

// PWA
import registerServiceWorker from './registerServiceWorker';

// App-specific
import { homepage } from '../package.json';
import './index.css';

let basename;
process.env.NODE_ENV !== 'production' ? (basename = '') : (basename = homepage);

// Render application
ReactDOM.render(
  <ThemeProvider theme={CalciteTheme}>
    <BrowserRouter basename={basename}>
      <Route path="/" component={App} />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
