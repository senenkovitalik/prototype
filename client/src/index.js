import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import serverStyleCleanup from 'node-style-loader/clientCleanup';
import './index.css';
import AppContainer from "./components/app/AppContainer";

ReactDOM.hydrate(
  <BrowserRouter>
    <AppContainer/>
  </BrowserRouter>,
  document.getElementById('app'));

serverStyleCleanup();