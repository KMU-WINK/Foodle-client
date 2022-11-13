import styled, { keyframes } from "styled-components";
import clocheEmpty from "../../images/cloche_empty.svg";
import clocheFilled from "../../images/cloche_filled.svg";

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingImage = styled.div`
  position: relative;
  width: max-content;
  margin: 0px 0px 8px 0px;
`;

export const EmptyBox = styled.div`
  width: 100%;
  z-index: 0;
`;

export const FilledBox = styled.div`
  position: absolute;
  z-index: 1;
  width: ${(props) => props.progress}%;
  overflow: hidden;
`;

export const ProgressFilled = styled.img.attrs({
  src: `${clocheFilled}`,
})``;

export const ProgressEmpty = styled.img.attrs({
  src: `${clocheEmpty}`,
})``;

const TextAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.75);
  }
`;

export const LoadingText = styled.div`
  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  color: #005eeb;

  span {
    display: inline-block;
    animation: ${TextAnimation} 1.1s infinite alternate;
  }
  span:nth-child(2) {
    animation-delay: 0.1s;
  }
  span:nth-child(3) {
    animation-delay: 0.2s;
  }
  span:nth-child(4) {
    animation-delay: 0.3s;
  }
  span:nth-child(5) {
    animation-delay: 0.4s;
  }
  span:nth-child(6) {
    animation-delay: 0.5s;
  }
  span:nth-child(7) {
    animation-delay: 0.6s;
  }
  span:nth-child(8) {
    animation-delay: 0.7s;
  }
  span:nth-child(9) {
    animation-delay: 0.8s;
  }
  span:nth-child(10) {
    animation-delay: 0.9s;
  }
  span:nth-child(11) {
    animation-delay: 1s;
  }
`;
