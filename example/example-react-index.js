import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import injectKaiOSNavigation from 'react-kaios-navigation';

ReactDOM.render(
        <App />,
    document.getElementById('root')
);

injectKaiOSNavigation();
