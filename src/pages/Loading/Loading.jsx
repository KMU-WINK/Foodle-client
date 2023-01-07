import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as styled from "./styles";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const savedCallback = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { foodWant, inputValue } = location.state || false; 

  useEffect(() => {
    if (!foodWant) navigate('/search');
  }, [])

  const callback = () => {
    if (progress > 100) {
      // 로딩이 완료된 경우
      navigate("/result", {state: { foodWant }});
    }
    setProgress(progress + 1);
  };

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    const timer = setInterval(tick, 50);
    return () => clearInterval(timer);
  }, []);

  const loadingTextList = [
    { id: 0, text: "L"},
    { id: 1, text: "O"},
    { id: 2, text: "A"},
    { id: 3, text: "D"},
    { id: 4, text: "I"},
    { id: 5, text: "N"},
    { id: 6, text: "G"},
    { id: 7, text: " "},
    { id: 8, text: "."},
    { id: 9, text: "."},
    { id: 10, text: "."},
  ];
  const loadingText = loadingTextList.map((text) => <span key={text.id}>{text.text}</span>);

  return (
    <styled.Background>
      <styled.LoadingImage>
        <styled.FilledBox progress={progress}>
          <styled.ProgressFilled />
        </styled.FilledBox>
        <styled.EmptyBox>
          <styled.ProgressEmpty />
        </styled.EmptyBox>
      </styled.LoadingImage>
      <styled.LoadingText>{loadingText}</styled.LoadingText>
    </styled.Background>
  );
};

export default Loading;
