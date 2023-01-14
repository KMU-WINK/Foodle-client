import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box1 = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 0px 20px;
  margin-bottom: 100px;
`;

export const Logo = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #005eeb;
  margin: 40px 0px 30px 0px;
  cursor: pointer;
`;

export const TitleWant = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-size: 24px;
  line-height: 36px;
  color: #191919;
`;

export const Input = styled.input`
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom: 1px solid #191919;

  width: 350px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 21px;
  color: #191919;

  padding: 10px 0px 10px 0px;

  &:focus {
    outline: none;
    border-bottom: 1px solid #005eeb;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const Title = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;

  color: #191919;
  margin: 30px 0px 0px 0px;
`;

export const BtnSearch = styled.button`
  position: fixed;
  bottom: 40px;
  width: 350px;
  height: 50px;
  border: none;
  border-radius: 50px;
  background: ${(props) => (props.active ? "#005eeb" : "#80aef5")};
  cursor: ${(props) => (props.active ? "pointer" : "")};
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  display: flex;
  justify-content: center;
  margin: 50px 0px 0px 0px;

  @media screen and (max-width: 440px) {
    visibility: ${(props) => (props.keyboard ? "hidden" : "visible")};
  }
`;
export const DropDownBox = styled.div`
  position: fixed;
  width: 350px;
  padding: 10px 0px;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
`;

export const DropDownItem = styled.div`
  display: flex;
  height: 28px;
  align-items: center;
  padding: 0px 20px;
  :hover {
    background-color: ${(props) => (props.noneItem ? "#FFFFFF" : "#E8E8F8")};
  }
`;

export const BtnBox = styled.div`
  display: flex;
  margin: 10px 0px 10px 0px;
`;

export const Index = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */
  color: #191919;
`;

export const BtnContent = styled.button`
  background: #ffffff;
  border: 0.7px solid ${(props) => (props.flag ? "#005EEB" : "#999999")};
  border-radius: 20px;
  cursor: pointer;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => (props.flag ? "#005EEB" : "#999999")};
  padding: 5px 10px 5px 10px;
  margin: 0px 4px 0px 0px;
`;

export const BannedItems = styled.div`
  width: 350px;
  display: flex;
  flex-wrap : wrap;
  gap: 8px;
  align-items: center;
  margin-top: 12px;
`;

export const BannedItem = styled.div`
  padding: 4px 8px;
  font-family: "Noto Sans CJK KR";
  font-size: 12px;
  background: #ffffff;
  color: #005eeb;
  border: 1px solid #005eeb;
  border-radius: 8px;
  white-space: nowrap;
  :hover {
    cursor: pointer;
    border: 1px solid #80aef5;
    background-color: #80aef5;
    color: #ffffff;
  }
`;
