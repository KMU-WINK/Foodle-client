import styled from 'styled-components';

export const ResultText = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-weight: 500;
    font-size: 30px;
    text-align:center;

    color: #191919;
`

export const ResultItems = styled.div`
    margin: 35px 0px 0px 0px;
    display: flex;
    justify-content: center;
`

export const ResultItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    height: 80px;
    background: #ffffff;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`

export const ItemRank = styled.div`
    width: 50px;
    height: 100%;
    border-right: solid 1px #f7f7f7;

`
export const ItemContent = styled.div`
    width: 330px;
    height: 100%;
    border-left: solid 1px #f7f7f7;
`