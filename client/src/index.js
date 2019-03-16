import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './redux/reducer';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(thunk))
);

const app = (
    <Provider store={ store }>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
