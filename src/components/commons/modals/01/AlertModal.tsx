import { Modal } from "antd";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
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
  width: 100px;
  height: 30px;
  border: 1px solid #d9d9d9;
  background-color: white;
  border-radius: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  :hover {
    background: #184124;
    color: white;
  }
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
        bodyStyle={{
          width: "10px",
          height: "0px",
          backgroundColor: "#FFFFFF",
        }}
        width={200}
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
