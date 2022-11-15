import React from 'react';
import Main from './pages/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './pages/Search/Search';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/search' element={<Search/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
