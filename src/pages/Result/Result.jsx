import React from "react";
import { useNavigate } from "react-router-dom";
import food from "../../images/test_food.svg";
import slack from "../../images/ic_slack.svg";
import kakao from "../../images/ic_kakao.svg";
import link from "../../images/ic_link.svg";

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
} from "./styles";

const Result = () => {
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
      <ResultText>
        📢 <br />
        Foodle이 당신을 위해 <br />
        10가지 음식을 준비했어요!
      </ResultText>
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
