import React, { useState, useEffect } from "react";
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

  //   useEffect(() => {
  //     const update = setInterval(() => {
  //       setProgress((progress) => progress + 1);
  //       console.log(progress);
  //     }, 1000);
  //   }, [progress]);

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
      <LoadingText>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span> </span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </LoadingText>
    </Background>
  );
};

export default Loading;
