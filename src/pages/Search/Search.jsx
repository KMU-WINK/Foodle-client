import React, { useState } from 'react';
import { Box1, BtnContent, BtnSearch, FlexBox, Index, Input, Logo, TitleWant, Title, BtnBox } from './styles';
import { useNavigate } from 'react-router-dom';



const Search = () => {

    const navigate = useNavigate();

    const GotoMain = () => {
        navigate('/');
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(isOpen => !isOpen);
    }
    
    function Category(props) {
        const isOpen = props.isOpen;
    
        if (isOpen) {
            return (
                <>
                    <Index>국물</Index>
                    <BtnBox>
                        <BtnContent>국물 있음</BtnContent>
                        <BtnContent>국물 없음</BtnContent>
                    </BtnBox>
                </>
            )
        }
    }


    return (
        <FlexBox>
            <Box1>
                <Logo onClick={GotoMain}>FOODLE</Logo>
                <TitleWant fontWeight="500">어떤 느낌의</TitleWant>
                <TitleWant fontWeight="400">음식을 원하세요?</TitleWant>
                <Input placeholder='ex. 약간 맵고 달달한 음식'></Input>
                <Title>먹기 싫은 음식</Title>
                <Input placeholder='ex. 떡볶이'/>
                <Title onClick={()=>toggleOpen()}>카테고리</Title>
                <Category isOpen={isOpen} />
                <BtnSearch>검색하기</BtnSearch>
            </Box1>
        </FlexBox>

    );
};

export default Search;