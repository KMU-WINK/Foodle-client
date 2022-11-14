import React, { useState, useEffect, useRef } from "react";
import {
  Background,
  EmptyBox,
  FilledBox,
  ProgressEmpty,
  ProgressFilled,
  LoadingImage,
  LoadingText,
} from "./styles";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const savedCallback = useRef();

  const callback = () => {
    // Progress 이벤트 loop code
    // if (progress > 100) {
    //   setProgress(0);
    // } else {
    //   setProgress(progress + 1);
    // }
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

  const loadingTextList = ["L", "O", "A", "D", "I", "N", "G", " ", ".", ".", "."];
  const loadingText = loadingTextList.map((text) => <span>{text}</span>);

  return (
    <Background>
      <LoadingImage>
        <FilledBox progress={progress}>
          <ProgressFilled />
        </FilledBox>
        <EmptyBox>
          <ProgressEmpty />
        </EmptyBox>
      </LoadingImage>
      <LoadingText>{loadingText}</LoadingText>
    </Background>
  );
};

export default Loading;
