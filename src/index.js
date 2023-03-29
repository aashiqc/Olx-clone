import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './Store/FireBaseContext';
import firebase from './firebase/Config';


ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
    <App />
</FirebaseContext.Provider >
, document.getElementById('root'));

