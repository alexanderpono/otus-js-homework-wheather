import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from "react-redux";
import App from './components/App';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const store = createStore(rootReducer);
store.subscribe(() => {
    let st = store.getState();
    let srcList = st.srcList;
    //srcList.cities = 'arr.' + srcList.cities.length;
    let st2 = {...st, cities:'arr.' + srcList.cities.length, srcList : srcList};
    console.log('store: getState()=', JSON.stringify(st2))
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

