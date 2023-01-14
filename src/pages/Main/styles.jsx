import styled from "styled-components";
import magnifierIcon from "../../images/magnifier.png";

export const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Logo = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #005eeb;
  margin: 0px 0px 28px 0px;
`;

export const SearchBar = styled.div`
  width: 44vw;
  min-width: 300px;
  max-width: 561px;
  height: 44px;
  font-family: "Noto Sans CJK KR";
  font-weight: 350;
  font-size: inherit;
  color: #999999;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 4px 40px 4px 40px;
  justify-content: space-between;
  margin-bottom: 32px;

  @media screen and (max-width: 440px) {
    width: 50px;
    padding: 4px 20px;
  }
`;

export const Magnifier = styled.img.attrs({
  src: `${magnifierIcon}`,
})`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
