import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import food from "../../images/test_food.svg";
import slack from "../../images/ic_slack.svg";
import kakao from "../../images/ic_kakao.svg";
import link from "../../images/ic_link.svg";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";

import {
  ButtonAgain,
  ItemContent,
  ItemRank,
  PageContainier,
  ResultItem,
  ResultItems,
  ResultText,
  ShareButtons,
  ShareButton,
  CoverContainer,
  UpArrow,
  Arrows,
  HeightBox,
} from "./styles";

const Confetti = () => {
  const count = 160;
  const defaults = {
    origin: { y: 0.4 },
  };
  const fire = (particleRatio, opts) => {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  };
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
};

const ResultCover = () => {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  const wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const preventDefaultForScrollKeys = (e) => {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  };

  const disableScroll = () => {
    window.addEventListener(wheelEvent, preventDefault, { passive: false }); // 데스크탑 환경
    window.addEventListener("touchmove", preventDefault, { passive: false }); // 모바일 환경
    window.addEventListener("keydown", preventDefaultForScrollKeys, {
      passive: false,
    });
  };

  // call this to Enable
  const enableScroll = () => {
    window.removeEventListener(wheelEvent, preventDefault, { passive: false });
    window.removeEventListener("touchmove", preventDefault, { passive: false });
    window.removeEventListener("keydown", preventDefaultForScrollKeys, {
      passive: false,
    });
  };

  const scrollDown = () => {
    disableScroll();
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
    enableScroll();
    return 0;
  };

  return (
    <CoverContainer>
      <HeightBox />
      <ResultText>
        📢 <br />
        Foodle이 당신을 위해 <br />
        10가지 음식을 준비했어요!
      </ResultText>
      <Arrows onClick={scrollDown}>
        <UpArrow opacity="0.2" />
        <UpArrow opacity="0.5" />
        <UpArrow />
      </Arrows>
    </CoverContainer>
  );
};

const Result = () => {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
    Confetti();
  }, []);

  const tempData = [
    { rank: 1, name: "라면", src: food, rate: 99.8 },
    { rank: 2, name: "짬뽕", src: food, rate: 90.0 },
    { rank: 3, name: "마라탕", src: food, rate: 89.7 },
    { rank: 4, name: "김치찌개", src: food, rate: 86.6 },
    { rank: 5, name: "부대찌개", src: food, rate: 80.4 },
    { rank: 6, name: "국물 떡볶이", src: food, rate: 77.1 },
    { rank: 7, name: "매운 쫄갈비", src: food, rate: 77.0 },
    { rank: 8, name: "된장찌개", src: food, rate: 76.9 },
    { rank: 9, name: "김치 콩나물국", src: food, rate: 76.8 },
    { rank: 10, name: "훠거", src: food, rate: 70.8 },
  ];

  const navigate = useNavigate();
  const searchAgain = () => {
    navigate("/");
  };

  return (
    <PageContainier>
      <ResultCover />
      <ResultItems>
        {tempData.map((item) => (
          <ResultItem>
            <ItemRank>{item.rank}</ItemRank>
            <ItemContent>
              <div>
                <img src={item.src} />
                <p>{item.name}</p>
              </div>
              <p>{item.rate.toFixed(1)}% 일치</p>
            </ItemContent>
          </ResultItem>
        ))}
      </ResultItems>
      <ButtonAgain onClick={searchAgain}>다시 검색하기</ButtonAgain>
      <ShareButtons>
        <ShareButton bgColor="#ffffff">
          <img src={slack} />
        </ShareButton>
        <ShareButton bgColor="#F7E569">
          <img src={kakao} />
        </ShareButton>
        <ShareButton bgColor="#8D9BCE">
          <img src={link} />
        </ShareButton>
      </ShareButtons>
    </PageContainier>
  );
};

export default Result;
