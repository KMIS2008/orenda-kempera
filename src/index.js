import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';
import { store } from "./redux/store";

const theme = {
  colors: {
    // white: '#fafafa',
    // black: '#212121',
  },

  spacing: value => `${value * 5}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter basename="orenda-kempera">
      {/* <Provider store={store}> */}
        <ThemeProvider theme = {theme}>
         <App />
       </ThemeProvider>        
      {/* </Provider> */}
    </BrowserRouter>

  </React.StrictMode>

);


