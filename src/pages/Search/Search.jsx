import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

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

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  function Category(props) {
    const isOpen = props.isOpen;
    if (isOpen) {
      return (
        <>
          <styled.Index>국물</styled.Index>
          <styled.BtnBox>
            {categorySoup.map((soup) => (
              <styled.BtnContent
                key={soup.index}
                onClick={() => ClickSoup(soup.index)}
                flag={currCheckedSoup === soup.index}
              >
                {soup.content}
              </styled.BtnContent>
            ))}
          </styled.BtnBox>
        </>
      );
    }
  }

  const [bannedFood, setBannedFood] = useState([]);
  const [keyboard, setKeyboard] = useState(false);
  const [foodWant, setFoodWant] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState(wholeTextArray);
  const [dropDownIndex, setDropDownIndex] = useState(-1);
  const [isFocus, setIsFocus] = useState(false);

  const navigateToLoading = () => {
    if (foodWant != "") {
      navigate("/loading", { state: { foodWant, bannedFood } });
    }
  };

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
    setBannedFood([clickedItem, ...bannedFood]);
    setIsHaveInputValue(false);
    console.log(bannedFood);
  };

  const changeFoodWant = (event) => setFoodWant(event.target.value.trimStart());
  const focusFoodWant = () => setKeyboard(true);
  const blurFoodWant = () => {
    setFoodWant(foodWant.trimEnd());
    setKeyboard(false);
  };

  useEffect(() => console.log(bannedFood), [bannedFood]);

  useEffect(showDropDownList, [inputValue]);

  return (
    <styled.FlexBox>
      <styled.Box1>
        <div>
          <styled.Logo onClick={() => navigate("/")}>FOODLE</styled.Logo>
          <styled.TitleWant fontWeight="500">어떤 느낌의</styled.TitleWant>
          <styled.TitleWant fontWeight="400">음식을 원하세요?</styled.TitleWant>
          <styled.Input
            type="text"
            value={foodWant}
            onChange={changeFoodWant}
            onBlur={blurFoodWant}
            onFocus={focusFoodWant}
            placeholder="ex. 약간 맵고 달달한 음식"
          ></styled.Input>
          <styled.Title>먹기 싫은 음식</styled.Title>
          <styled.Input
            type="text"
            value={inputValue}
            onChange={changeInputValue}
            onFocus={() => {
              setIsFocus(true);
              setKeyboard(true);
            }}
            onBlur={() => {
              setIsFocus(false);
              setKeyboard(false);
            }}
            placeholder="ex. 떡볶이"
          />
          {isHaveInputValue && (
            <styled.DropDownBox>
              {dropDownList.length === 0 && (
                <styled.DropDownItem
                  noneItem={true}
                  onClick={() => setIsFocus(false)}
                >
                  해당 음식을 찾을 수 없어요
                </styled.DropDownItem>
              )}
              {dropDownList.map((item, index) => {
                return (
                  <styled.DropDownItem
                    key={index}
                    onClick={() => clickDropDownItem(item)}
                    focus={dropDownIndex == index}
                  >
                    {item}
                  </styled.DropDownItem>
                );
              })}
            </styled.DropDownBox>
          )}
          <styled.Title onClick={() => toggleOpen()}>카테고리</styled.Title>
          <Category isOpen={isOpen} />
        </div>
        <styled.BtnSearch
          keyboard={keyboard}
          active={foodWant != ""}
          onClick={() => navigateToLoading()}
        >
          검색하기
        </styled.BtnSearch>
      </styled.Box1>
    </styled.FlexBox>
  );
};

export default Search;
