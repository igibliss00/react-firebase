import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// provides bindings for firestore database in paticular 
import { reduxFirestore, getFirestore } from 'redux-firestore';
//  provides bindings provides to interact with the firebase service as a whole 
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

const store = createStore(rootReducer, 
    // compose allows us to add multiple store enchancers
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {attachAuthIsReady: true})
    )
);


// attachAuthIsReady enables firebaseAuthIsReady which waits for firebase to figure out we're logged in
// and then React app figrues out that we're logged in.  Only then renders so that the app doesn't get loaded
// until the authentication is finished 
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
})



