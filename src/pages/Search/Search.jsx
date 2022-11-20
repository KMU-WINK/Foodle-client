import React, { useState } from "react";
import {
  Box1,
  BtnContent,
  BtnSearch,
  FlexBox,
  Index,
  Input,
  Logo,
  TitleWant,
  Title,
  BtnBox,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const GotoMain = () => {
    navigate("/");
  };

  //  카테고리_국물 라디오 버튼
  const [currCheckedSoup, setCurrCheckedSoup] = useState(0);
  const [prevCheckedSoup, setPrevCheckedSoup] = useState(0);

  function ClickSoup(index) {
    setPrevCheckedSoup(currCheckedSoup);
    setCurrCheckedSoup(index);
  }

  const categorySoup = [
    { index: 1, content: "국물 있음" },
    { index: 2, content: "국물 없음" },
    { index: 3, content: "상관 없음" },
  ];


  const [checkedNation, setCheckedNation] = useState([]);
  
  function ClickNation(index) {
      
    if (checkedNation.includes(index)){
        const deletedArray = checkedNation.filter(number => number != index);
        setCheckedNation(checkedNation => deletedArray);
    } else {
        setCheckedNation(checkedNation => [...checkedNation, index]);
    }


  }

  const categoryNation = [
    { index: 1, content: "한식" },
    { index: 2, content: "중식" },
    { index: 3, content: "일식" },
    { index: 4, content: "양식" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };



  function Category(props) {
    const isOpen = props.isOpen;

    if (isOpen) {
      return (
        <>
          <Index>국물</Index>
          <BtnBox>
            {categorySoup.map((soup) => (
              <BtnContent
                onClick={() => ClickSoup(soup.index)}
                flag={currCheckedSoup === soup.index}
              >
                {soup.content}
              </BtnContent>
            ))}
          </BtnBox>
          <Index>나라</Index>
            <BtnBox>
            {categoryNation.map((nation) => (
                <BtnContent
                    onClick={() => ClickNation(nation.index)}
                    flag={checkedNation.includes(nation.index)}
                >
                    {nation.content}
                </BtnContent>
            ))}
            </BtnBox>

        </>
      );
    }
  }

  return (
    <FlexBox>
      <Box1>
        <Logo onClick={GotoMain}>FOODLE</Logo>
        <TitleWant fontWeight="500">어떤 느낌의</TitleWant>
        <TitleWant fontWeight="400">음식을 원하세요?</TitleWant>
        <Input placeholder="ex. 약간 맵고 달달한 음식"></Input>
        <Title>먹기 싫은 음식</Title>
        <Input placeholder="ex. 떡볶이" />
        <Title onClick={() => toggleOpen()}>카테고리</Title>
        <Category isOpen={isOpen} />
        <BtnSearch>검색하기</BtnSearch>
      </Box1>
    </FlexBox>
  );
};

export default Search;
