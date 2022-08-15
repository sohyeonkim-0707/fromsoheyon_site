import { Modal } from "antd";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 45px 120px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  transform: translate(-50%, -50%);
`;

export const ModalText = styled.div`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  padding-bottom: 26px;
`;

export const ConfirmBtn = styled.button`
  width: 123px;
  height: 32px;
  border: none;
  border-radius: 50;
  background-color: #184124;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
`;

export default function AlertModal(props) {
  return (
    <>
      <Modal
        visible={true}
        closable={false}
        maskStyle={{
          width: "100%",
          height: "100%",
        }}
        footer={null}
        centered={true}
      >
        <Wrapper>
          <ModalText>{props.contents ? props.contents : ""}</ModalText>
          <ConfirmBtn onClick={props.onClickExit}>ok</ConfirmBtn>
        </Wrapper>
      </Modal>
    </>
  );
}
