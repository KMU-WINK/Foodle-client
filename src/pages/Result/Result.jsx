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
        <ResultItem>
          <ItemRank>1</ItemRank>
          <ItemContent>
            <div>
              <img src={food} />
              <p>라면</p>
            </div>
            <p>99.8% 일치</p>
          </ItemContent>
        </ResultItem>
        <ResultItem>
          <ItemRank>2</ItemRank>
          <ItemContent>
            <div>
              <img src={food} />
              <p>난 라면은 싫은데</p>
            </div>
            <p>99.8% 일치</p>
          </ItemContent>
        </ResultItem>
        <ResultItem>
          <ItemRank>3</ItemRank>
          <ItemContent></ItemContent>
        </ResultItem>
        <ResultItem>
          <ItemRank>4</ItemRank>
          <ItemContent></ItemContent>
        </ResultItem>
        <ResultItem>
          <ItemRank>5</ItemRank>
          <ItemContent></ItemContent>
        </ResultItem>
        <ResultItem>
          <ItemRank>6</ItemRank>
          <ItemContent></ItemContent>
        </ResultItem>
        <ResultItem>
          <ItemRank>7</ItemRank>
          <ItemContent></ItemContent>
        </ResultItem>
        <ResultItem>
          <ItemRank>8</ItemRank>
          <ItemContent></ItemContent>
        </ResultItem>
        <ResultItem>
          <ItemRank>9</ItemRank>
          <ItemContent></ItemContent>
        </ResultItem>
        <ResultItem>
          <ItemRank>10</ItemRank>
          <ItemContent></ItemContent>
        </ResultItem>
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
