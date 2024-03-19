import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
// import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#fafafa',
    black: '#212121',
    background: '#D3D3D3',
    gray: "#808080",
    blue: '#F0F8FF',
    darkblue: '#4e5dda',
    border: '#d8d1d1',
    rose: '#f2ead1',
    purpel: 'rgb(190 69 163)',
    red: 'rgb(231 13 13)',
    green: '#17b717',
  },

  spacing: value => `${value * 5}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">

   <ThemeProvider theme = {theme}>
    <App />
   </ThemeProvider> 

    </BrowserRouter>

  </React.StrictMode>

);


