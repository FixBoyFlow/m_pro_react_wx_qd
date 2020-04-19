import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home'

function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <BrowserRouter>
        <Route path='/home' component={Home} ></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
