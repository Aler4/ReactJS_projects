import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getCurrenciesThunk} from "./redux/thunks";
import {
  currenciesSelector, isErrorSelector, isLoadSelector,
  titlesSelector
} from "./redux/selectors";
import {Header, Converter} from './components';


function App() {
  let titles = useSelector(titlesSelector)
  let currencies = useSelector(currenciesSelector);
  let isLoad = useSelector(isLoadSelector);
  let isFalse = useSelector(isErrorSelector);
  let dispatch = useDispatch();





  useEffect(() => {
    if(currencies.length === 0) {
      dispatch(getCurrenciesThunk(titles));
    }
  },[]);

  if(isLoad) {
    return (<h1 style={{textAlign: 'center'}}>
          Завантаження данних...
          </h1>)
  }
  if(isFalse) {
    return (<h1 style={{textAlign: 'center'}}>
          Ой, щось трапилось, спробуйте пізніше
          </h1>)
  }
  else {
    return (<div className="App">
          <Header currencies={currencies} />
          <Converter currencies={currencies} />
        </div>
    );
  }

}

export default App;
