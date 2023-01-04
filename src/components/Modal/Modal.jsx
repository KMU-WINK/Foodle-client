import React, { useEffect } from "react";
import { shareKakao } from "../../utils/shareKaKaoLink";
import {
  FlexBox,
  ModalBackground,
  ModalBox,
  ModalButton,
  ModalText,
} from "./styles";

const modalData = [
  { text: "슬랙", linking: "" },
  { text: "카카오톡", linking: "" },
];

const Modal = ({ ModalInfo }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <ModalBackground>
      <ModalBox>
        <ModalText>
          {modalData[ModalInfo.modalType].text}에 결과를 공유하시겠어요?
        </ModalText>
        <FlexBox direction="row">
          <ModalButton
            background="#005eeb"
            color="#ffffff"
            onClick={() => {
              if (modalData[ModalInfo.modalType].text == "카카오톡") {
                shareKakao(window.location.href, "Foodle", "약간 매콤한 음식");
              }
              ModalInfo.setModalOpen(false);
            }}
          >
            네
          </ModalButton>
          <ModalButton
            background="#ffffff"
            color="#999999"
            border="0.7px solid #999999"
            onClick={() => {
              ModalInfo.setModalOpen(false);
            }}
          >
            아니오
          </ModalButton>
        </FlexBox>
      </ModalBox>
    </ModalBackground>
  );
};

export default Modal;
