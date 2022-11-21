import styled from "styled-components";
import { keyframes } from "styled-components";
import arrow from "../../images/ic_up_arrow.svg";

export const ResultText = styled.div`
  font-family: "Noto Sans CJK KR";
  font-weight: 500;
  font-size: 30px;
  text-align: center;

  color: #191919;
`;

export const ResultItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const ItemRank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  border-right: solid 1px #f7f7f7;

  font-family: "Roboto";
  font-weight: 900;
  font-size: 30px;
  color: #005eeb;
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  width: 330px;
  height: 100%;
  border-left: solid 1px #f7f7f7;
  padding: 0px 19px 0px 12px;

  justify-content: space-between;

  & > img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }

  & > div {
    display: flex;
    align-items: center;

    p {
      font-family: "Noto Sans CJK KR";
      margin: 0px 0px 0px 19px;
    }
  }

  & > p:not(:last-of-type) {
    font-family: "Noto Sans CJK KR";
    font-weight: 500;
    font-size: 18px;
    color: #191919;
  }

  & > p:last-of-type {
    font-family: "Noto Sans CJK KR";
    font-weight: 250;
    font-size: 14px;
  }
`;

export const ResultItems = styled.div`
  margin: 35px 0px 0px 0px;
  ${ResultItem}:nth-child(-n+3) {
    ${ItemContent} {
      & > p:last-of-type {
        color: #005eeb;
        font-weight: 400;
      }
    }
  }
  ${ResultItem}:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const ButtonAgain = styled.div`
  cursor: pointer;
  width: 200px;
  height: 22px;
  margin: 55px 0px 0px 0px;
  padding: 14px 75px 14px 75px;
  background: #005eeb;
  border-radius: 50px;
  text-align: center;
  color: white;
  font-family: "Noto Sans CJK KR";
  font-weight: 500;
  font-size: 18px;
`;

export const ShareButton = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.bgColor};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.07);
  border-radius: 30px;
`;

export const ShareButtons = styled.div`
  padding: 20px 0px 20px 0px;
  display: flex;

  & > ${ShareButton}:not(:last-of-type) {
    margin: 0px 22px 0px 0px;
  }
`;

export const PageContainier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CoverContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const FadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const UpArrow = styled.img.attrs({
  src: `${arrow}`,
})`
  width: 20px;
  height: 12.67px;
  opacity: ${(props) => props.opacity || 1};
`;

export const Arrows = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  ${UpArrow} {
    animation: ${FadeOut} 1.2s infinite alternate;
  }
  ${UpArrow}:nth-child(1) {
    animation-delay: 1.2s;
  }
  ${UpArrow}:nth-child(2) {
    animation-delay: 0.8s;
  }
  ${UpArrow}:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export const HeightBox = styled.div`
  height: 60px;
`;