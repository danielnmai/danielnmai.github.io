import React from 'react';
import { hydrate } from 'react-dom';
import App from './App.js';
import '../styles/index.css';

hydrate(<App />, document.getElementById('app'));
