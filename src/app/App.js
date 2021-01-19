import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './router/routes';
import { Theme_Options } from './App.theme';
import { HashRouter as Router } from 'react-router-dom';
import './App.scss';

function App() {
  const theme = createMuiTheme(Theme_Options);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
