import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render( /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(App, null)), document.getElementById('app'));
});