import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { recommendFood } from "../../axios/find-food";
import * as styled from "./styles";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const savedCallback = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { myRes } = location.state || false;
  const [recommendResult, setRecommendResult] = useState([]);

  useEffect(() => {
    const url = new URL(window.location.href);
    const urlParmas = url.searchParams;
    const foodWant = urlParmas.get("want");
    const isSoup = urlParmas.get("is");

    const data = {
      ban: urlParmas.get("ban"),
      nation: urlParmas.get('nation'),
      etc: urlParmas.get("extra"),
    };

    if (!(isSoup && data && foodWant)) navigate("/search");
    recommendFood(foodWant, isSoup, data).then((res) => {
      setRecommendResult(res);
    });
  }, []);

  const callback = () => {
    if (progress > 100) {
      // 로딩이 완료된 경우
      const shareLink = window.location.href;
      navigate("/result", { state: { recommendResult, shareLink, myRes } });
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
    { id: 0, text: "L" },
    { id: 1, text: "O" },
    { id: 2, text: "A" },
    { id: 3, text: "D" },
    { id: 4, text: "I" },
    { id: 5, text: "N" },
    { id: 6, text: "G" },
    { id: 7, text: " " },
    { id: 8, text: "." },
    { id: 9, text: "." },
    { id: 10, text: "." },
  ];
  const loadingText = loadingTextList.map((text) => (
    <span key={text.id}>{text.text}</span>
  ));

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
