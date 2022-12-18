import React from "react";
import Main from "./pages/Main/Main";
import Loading from "./pages/Loading/Loading";
import Result from "./pages/Result/Result";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
