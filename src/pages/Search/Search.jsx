import React from 'react';
import { Box1, BtnContent, BtnSearch, FlexBox, Index, Input, Logo, TitleWant, Title } from './styles';

const Search = () => {
    return (
        <FlexBox>
            <Box1>
                <Logo>FOODLE</Logo>
                <TitleWant fontWeight="500">어떤 느낌의</TitleWant>
                <TitleWant fontWeight="400">음식을 원하세요?</TitleWant>
                <Input placeholder='ex. 약간 맵고 달달한 음식'></Input>
                <Title>먹기 싫은 음식</Title>
                <Input placeholder='ex. 떡볶이'/>
                <Title>카테고리</Title>
                <Index>국물</Index>
                <BtnContent>국물 있음</BtnContent>
                <BtnContent>국물 없음</BtnContent>
                <BtnSearch>검색하기</BtnSearch>
            </Box1>
        </FlexBox>

    );
};

export default Search;