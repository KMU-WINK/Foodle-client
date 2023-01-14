import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import { useNavigate } from "react-router-dom";
import { getSearchMenus } from "../../axios/auto-complete";
import * as Hangul from "hangul-js";

const Search = () => {
  const navigate = useNavigate();

  const categorySoup = [
    { bool: true, content: "국물 있음" },
    { bool: false, content: "국물 없음" },
  ];

  const categoryNation = [
    { index: 0, content: "한식"},
    { index: 1, content: "중식"},
    { index: 2, content: "일식"},
    { index: 3, content: "양식"},
  ]

  const [bannedFood, setBannedFood] = useState([]);
  const [keyboard, setKeyboard] = useState(false);
  const [foodWant, setFoodWant] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [dropDownList, setDropDownList] = useState([]);
  const [dropDownIndex, setDropDownIndex] = useState(-1);
  const [isFocus, setIsFocus] = useState(false);
  const [isSoup, setIsSoup] = useState(true);
  const [foodNation, setFoodNation] = useState([]);
  const myRes = true;

  const clickNation = (index) => {
    if (foodNation.includes(index)) {
      const deletedArray = foodNation.filter((number) => number !== index);
      setFoodNation(deletedArray);
    } else {
      setFoodNation([...foodNation, index]);
    }
  }

  const navigateToLoading = () => {
    if (foodWant !== "") {
      navigate(`/loading?want=${foodWant}&ban=${bannedFood}&is=${isSoup}`, {
        state: { foodWant, myRes },
      });
    }
  };

  const clickDropDownItem = (clickedItem) => {
    setInputValue(() => "");
    setBannedFood([...new Set([clickedItem, ...bannedFood])]);
    setIsHaveInputValue(() => false);
  };

  const changeFoodWant = (event) => setFoodWant(event.target.value.trimStart());
  const focusFoodWant = () => setKeyboard(true);
  const blurFoodWant = () => {
    setFoodWant(foodWant.trimEnd());
    setKeyboard(false);
  };
  const removeBannedItem = (delIndex) => {
    setBannedFood(
        bannedFood.filter(function (_, index) {
          return index !== delIndex;
        })
    );
  };

  useEffect(() => {
    if (inputValue) {
      const body = { separatedElement: Hangul.disassemble(inputValue).join("") };
      getSearchMenus(body).then((r) => {
        setSearchResult(r);
      });
    } else {
      setSearchResult([]);
    }
  }, [inputValue]);

  useEffect(() => {
    if (searchResult) {
      setDropDownList(() => searchResult);
      setIsHaveInputValue(() => true);
    } else {
      setDropDownList(() => []);
      setIsHaveInputValue(() => false);
    }
  }, [searchResult]);

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
                placeholder="ex. 약간 맵고 달달한"
            />
            <styled.Title>먹기 싫은 음식</styled.Title>
            <styled.Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
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
                inputValue && (
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
                                onClick={() => clickDropDownItem(item.name)}
                                focus={dropDownIndex === index}
                            >
                              {item.name}
                            </styled.DropDownItem>
                        );
                      })}
                    </styled.DropDownBox>
                )
            )}
            <styled.BannedItems>
              {bannedFood.map((item, index) => {
                return (
                    <styled.BannedItem
                        key={index}
                        onClick={() => removeBannedItem(index)}
                    >
                      {item} ✕
                    </styled.BannedItem>
                );
              })}
            </styled.BannedItems>
            <styled.Title>카테고리</styled.Title>
            <styled.BtnBox>
              {categorySoup.map((soup) => (
                  <styled.BtnContent
                      key={soup.bool}
                      onClick={() => setIsSoup(soup.bool)}
                      flag={isSoup === soup.bool}
                  >
                    {soup.content}
                  </styled.BtnContent>
              ))}
            </styled.BtnBox>
            <styled.BtnBox>
              {categoryNation.map((nation) => (
                  <styled.BtnContent
                      key={nation.index}
                      onClick={() => clickNation(nation.index)}
                      flag={foodNation.includes(nation.index)}
                  >
                    {nation.content}
                  </styled.BtnContent>
              ))}
            </styled.BtnBox>
          </div>
          <styled.BtnSearch
              keyboard={keyboard}
              active={foodWant !== ""}
              onClick={() => navigateToLoading()}
          >
            검색하기
          </styled.BtnSearch>
        </styled.Box1>
      </styled.FlexBox>
  );
};

export default Search;
