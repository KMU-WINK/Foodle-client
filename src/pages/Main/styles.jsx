import styled from 'styled-components';
import magnifierIcon from "../../images/magnifier.png"


export const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Logo = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 900;
    font-size: 90px;
    line-height: 74px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #005EEB;
    margin: 0px 0px 30px 0px
`

export const SearchBar = styled.div`
    width: 696px;
    height: 70px;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 350;
    font-size: 22px;
    line-height: 21px;
    color: #999999;
    background: #FFFFFF;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0px 40px 0px 40px;
    justify-content: space-between;
`

export const Magnifier = styled.img.attrs({
    src: `${magnifierIcon}`,
})`
    width: 20px;
    height: 20px;

`;
