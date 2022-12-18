import styled from "styled-components";

export const ModalBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(3.16759px);
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  padding: 25px 0px 25px 0px;
  background: #ffffff;
  border-radius: 10px;
`;

export const ModalButton = styled.div`
  width: 74px;
  text-align: center;
  padding: 8.4px 0px 8.4px 0px;
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  border-radius: 20px;
  font-family: "Noto Sans CJK KR";
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  margin: 0px 5px 0px 5px;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
`
export const ModalText = styled.div`
  font-family: "Noto Sans CJK KR";
  font-weight: 400;
  font-size: 14px;
  padding: 14px 0px 14px 0px;
`