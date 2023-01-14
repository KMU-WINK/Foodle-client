import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import food from "../../images/test_food.svg";
import kakao from "../../images/ic_kakao.svg";
import link from "../../images/ic_link.svg";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import Modal from "../../components/Modal/Modal";
import Toast from "../../components/Toast/Toast";
import * as styled from "./styles";

const Confetti = () => {
  const count = 160;
  const defaults = {
    origin: { y: 0.4 },
  };
  const fire = (particleRatio, opts) => {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  };
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
};

const ResultCover = () => {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  const wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const preventDefaultForScrollKeys = (e) => {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  };

  const disableScroll = () => {
    window.addEventListener(wheelEvent, preventDefault, { passive: false }); // 데스크탑 환경
    window.addEventListener("touchmove", preventDefault, { passive: false }); // 모바일 환경
    window.addEventListener("keydown", preventDefaultForScrollKeys, {
      passive: false,
    });
  };

  // call this to Enable
  const enableScroll = () => {
    window.removeEventListener(wheelEvent, preventDefault, { passive: false });
    window.removeEventListener("touchmove", preventDefault, { passive: false });
    window.removeEventListener("keydown", preventDefaultForScrollKeys, {
      passive: false,
    });
  };

  const scrollDown = () => {
    disableScroll();
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
    enableScroll();
    return 0;
  };

  return (
    <styled.CoverContainer>
      <styled.HeightBox />
      <styled.ResultText>
        📢 <br />
        Foodle이 당신을 위해 <br />
        10가지 음식을 준비했어요!
      </styled.ResultText>
      <styled.Arrows onClick={scrollDown}>
        <styled.UpArrow opacity="0.2" />
        <styled.UpArrow opacity="0.5" />
        <styled.UpArrow />
      </styled.Arrows>
    </styled.CoverContainer>
  );
};

const Result = () => {
  useEffect(() => {
    let ins = document.createElement("ins");
    let scr = document.createElement("script");
    ins.className = "kakao_ad_area";
    ins.style = "display:none; width:100%;";
    scr.async = "true";
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    ins.setAttribute("data-ad-width", "320");
    ins.setAttribute("data-ad-height", "50");
    ins.setAttribute("data-ad-unit", "DAN-BffQhvxf2Z9n9sTi");
    document.querySelector(".adfit").appendChild(ins);
    document.querySelector(".adfit").appendChild(scr);
  }, []);

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
    Confetti();
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const { myRes, recommendResult, shareLink } = location.state || false;
  const searchAgain = () => {
    navigate("/search");
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [toastShare, setToastShare] = useState(false);
  const showModal = (type) => {
    setIsActive(false);
    setModalOpen(true);
    setModalType(type);
  };
  const copyClipBoard = async () => {
    await navigator.clipboard.writeText(shareLink);
    setIsActive(true);
  };

  return (
    <styled.PageContainier>
      <ResultCover />
      <styled.ResultItems>
        {recommendResult.map((item, index) => (
          <styled.ResultItem key={index}>
            <styled.ItemRank>{index + 1}</styled.ItemRank>
            <styled.ItemContent>
              <div>
                <img src={item.src} />
                <p>{item.name}</p>
              </div>
              <p>{item.score.toFixed(1)}% 일치</p>
            </styled.ItemContent>
          </styled.ResultItem>
        ))}
      </styled.ResultItems>
      <Toast
        isActive={isActive}
        setIsActive={setIsActive}
        message="링크가 복사되었습니다."
      />
      <Toast
        isActive={toastShare}
        setIsActive={setToastShare}
        message="다른 사람의 결과는 공유할 수 없습니다."
      />
      <styled.ButtonAgain onClick={searchAgain}>
        다시 검색하기
      </styled.ButtonAgain>
      <styled.ShareButtons>
        <styled.ShareButton
          bgColor="#F7E569"
          onClick={() => {
            if (myRes) {
              showModal(1);
            } else {
              setToastShare(true);
            }
          }}
        >
          <img src={kakao} />
        </styled.ShareButton>
        <styled.ShareButton
          bgColor="#8D9BCE"
          onClick={() => {
            setIsActive(true);
            console.log(isActive);
            copyClipBoard();
          }}
        >
          <img src={link} />
        </styled.ShareButton>
      </styled.ShareButtons>
      <div className="adfit" />
      {modalOpen && (
        <Modal ModalInfo={{ setModalOpen, modalType, shareLink }} />
      )}
    </styled.PageContainier>
  );
};

export default Result;
