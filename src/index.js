import 'babel-core/polyfill';


import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';


import App from './containers/App';
import rootReducer from './reducers/index';
import 'stylesheets/base';
import 'flexboxgrid/dist/flexboxgrid.css';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(loggerMiddleware, thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);


injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
