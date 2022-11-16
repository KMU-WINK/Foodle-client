import styled from 'styled-components';


export const Box1 = styled.div`
    width: 390px;
    padding: 0px 20px 0px 20px;

`

export const FlexBox = styled.div`
    display: flex;
    justify-content: center;
`

export const Logo = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 44px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #005EEB;
    margin: 0px 0px 30px 0px
`

export const TitleWant = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: ${props => props.fontWeight};
    font-size: 24px;
    line-height: 36px;
    color: #191919;
`

export const Input = styled.input`
    border-left-width:0;
    border-right-width:0;
    border-top-width:0;
    border-bottom : 1px solid #191919;

    width: 350px;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 350;
    font-size: 14px;
    line-height: 21px;
    color: #191919;

    padding: 10px 0px 10px 0px;


    &:focus {
        outline: none;
    };

    &:focus::placeholder {
        color: transparent;
    };
`;



export const Title = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 28px;

    color: #191919;
    margin: 30px 0px 0px 0px;

`



export const Toggle = styled.img`

`

export const BtnBox = styled.div`
    display: flex;
    margin: 10px 0px 10px 0px
`


export const Index = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */


    color: #191919;
`

export const BtnContent = styled.button`
    background: #ffffff;
    border: 0.7px solid #999999;
    border-radius: 20px;

    cursor: pointer;

    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #999999;
    padding: 5px 10px 5px 10px;
    margin: 0px 4px 0px 0px;
`

export const BtnSearch = styled.button`
    width: 350px;
    height: 50px;
    background: #005EEB;
    border: none;
    border-radius: 50px;
    
    cursor: pointer;

    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;

    display: flex;
    justify-content: center;
    margin: 50px 0px 0px 0px;
`