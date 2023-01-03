import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as styled from "./styles";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const savedCallback = useRef();
  const navigate = useNavigate();

  const callback = () => {
    if (progress > 100) {
      // 로딩이 완료된 경우
      navigate("/result");
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
    "L",
    "O",
    "A",
    "D",
    "I",
    "N",
    "G",
    " ",
    ".",
    ".",
    ".",
  ];
  const loadingText = loadingTextList.map((text) => <span>{text}</span>);

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
