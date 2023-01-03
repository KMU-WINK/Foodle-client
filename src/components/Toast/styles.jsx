import styled, { css, keyframes} from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

export const ToastBox = styled.div`
  z-index: 100;
  position: fixed;
  
  bottom: 80px;

  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 12px 28px 12px 28px;
  font-size: 14px;
  font-family: 'Noto Sans CJK KR';
  -webkit-animation: ${(props) =>
    props.show
      ? css`
          ${fadeIn} 0.5s, ${fadeOut} 0.5s 1.5s
        `
      : ""};
  };
  animation: ${(props) =>
    props.show
      ? css`
          ${fadeIn} 0.5s, ${fadeOut} 0.5s 1.5s
        `
      : ""};
  };
  animation-fill-mode: forwards;
`;
