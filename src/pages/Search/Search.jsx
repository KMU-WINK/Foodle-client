import React, { useEffect, useState } from "react";
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
  DropDownItem,
  DropDownBox,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const GotoMain = () => {
    navigate("/");
  };

  const FindFood = () => {
    // 선택된 정보로 서버에 쿼리 요청
    navigate("/loading");
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
    if (checkedNation.includes(index)) {
      const deletedArray = checkedNation.filter((number) => number != index);
      setCheckedNation((checkedNation) => deletedArray);
    } else {
      setCheckedNation((checkedNation) => [...checkedNation, index]);
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

  const wholeTextArray = [
    "치킨",
    "피자",
    "핫도그",
    "순댓국",
    "햄버거",
    "샌드위치",
    "돈까스",
    "닭갈비",
    "팝콘",
    "감자탕",
  ];

  const [inputValue, setInputValue] = useState("");
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState(wholeTextArray);
  const [dropDownIndex, setDropDownIndex] = useState(-1);
  const [isFocus, setIsFocus] = useState(false);

  const showDropDownList = () => {
    if (inputValue == "") {
      setIsHaveInputValue(false);
      setDropDownList([]);
    } else {
      // 해당 코드를 서버에 query를 보내는 형식으로 변경해야 합니다.
      const findResult = wholeTextArray.filter((item) =>
        item.includes(inputValue)
      );
      setDropDownList(findResult);
    }
  };

  const changeInputValue = (event) => {
    setInputValue(event.target.value);
    setIsHaveInputValue(true);
  };

  const clickDropDownItem = (clickedItem) => {
    setInputValue(clickedItem);
    setIsHaveInputValue(false);
  };

  useEffect(showDropDownList, [inputValue]);

  return (
    <FlexBox>
      <Box1>
        <Logo onClick={GotoMain}>FOODLE</Logo>
        <TitleWant fontWeight="500">어떤 느낌의</TitleWant>
        <TitleWant fontWeight="400">음식을 원하세요?</TitleWant>
        <Input placeholder="ex. 약간 맵고 달달한 음식"></Input>
        <Title>먹기 싫은 음식</Title>
        <Input
          type="text"
          value={inputValue}
          onChange={changeInputValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholder="ex. 떡볶이"
        />
        {isHaveInputValue && (
          <DropDownBox>
            {dropDownList.length === 0 && (
              <DropDownItem noneItem={true} onClick={() => setIsFocus(false)}>
                해당 음식을 찾을 수 없어요
              </DropDownItem>
            )}
            {dropDownList.map((item, index) => {
              return (
                <DropDownItem
                  key={index}
                  onClick={() => clickDropDownItem(item)}
                  focus={dropDownIndex == index}
                >
                  {item}
                </DropDownItem>
              );
            })}
          </DropDownBox>
        )}
        <Title onClick={() => toggleOpen()}>카테고리</Title>
        <Category isOpen={isOpen} />
        <BtnSearch onClick={FindFood}>검색하기</BtnSearch>
      </Box1>
    </FlexBox>
  );
};

export default Search;
