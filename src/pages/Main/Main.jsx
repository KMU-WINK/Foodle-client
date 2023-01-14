import React from "react";
import * as styled from "./styles";
import { useNavigate } from "react-router-dom";
import Typing from "react-kr-typing-anim";

const Main = () => {
  const navigate = useNavigate();
  const Typing = Typing.default ? Typing.default : Typing;

  const GotoSearch = () => {
    navigate("/search");
  };

  return (
    <styled.Box1>
      <styled.Logo>FOODLE</styled.Logo>
      <styled.SearchBar onClick={GotoSearch}>
        <Typing Tag="span" preDelay={500} postDelay={100} cursor fixedWidth>
          원하는 음식의 느낌을 적어보세요.
        </Typing>
        <styled.Magnifier />
      </styled.SearchBar>
    </styled.Box1>
  );
};

export default Main;
