import React from "react";
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
