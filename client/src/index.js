import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import serverStyleCleanup from 'node-style-loader/clientCleanup';
import App from "./components/App";
import './index.css';

ReactDOM.hydrate(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('app'));

serverStyleCleanup();