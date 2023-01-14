import React from "react";
import * as styled from "./styles";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const GotoSearch = () => {
    navigate("/search");
  };

  return (
    <styled.Box1>
      <styled.Logo>FOODLE</styled.Logo>
      <styled.SearchBar onClick={GotoSearch}>
          원하는 음식의 느낌을 적어보세요.
        <styled.Magnifier />
      </styled.SearchBar>
    </styled.Box1>
  );
};

export default Main;
