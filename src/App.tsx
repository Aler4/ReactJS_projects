import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './components/todoList';
import { TodoView } from './components';


function App() {

    return (<div className="App">
          <TodoView></TodoView>
        </div>
    );

}

export default App;
