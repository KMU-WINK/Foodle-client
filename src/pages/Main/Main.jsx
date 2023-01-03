import React from "react";
import { Box1, Logo, Magnifier, SearchBar } from "./styles";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const GotoSearch = () => {
    navigate("/search");
  };

  return (
    <Box1>
      <Logo>FOODLE</Logo>
      <SearchBar onClick={GotoSearch}>
        원하는 음식의 느낌을 적어보세요.
        <Magnifier />
      </SearchBar>
    </Box1>
  );
};

export default Main;
