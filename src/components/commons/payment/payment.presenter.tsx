import { Modal } from "antd";
import Head from "next/head";
import * as S from "./payment.styles";

export default function PaymentUI(props) {
  return (
    <div>
      <button onClick={props.onToggleModal} ref={props.clickRef}>
        Charge
      </button>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>

      {props.isOpen && (
        <Modal
          visible={true}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
          bodyStyle={{
            height: "25rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          width={400}
          footer={null}
          centered={true}
        >
          <S.Wrapper>
            <S.Title>충전 금액을 선택해주세요.</S.Title>
            <S.Select id="option" onChange={props.onChangeOption}>
              <option selected disabled>
                포인트 선택
              </option>
              <option value="100">100원</option>
              <option value="500">500원</option>
              <option value="1000">1,000원</option>
              <option value="5000">5,000원</option>
              <option value="10000">10,000원</option>
            </S.Select>
            <S.BtnBox>
              <button onClick={props.onToggleModal}>취소</button>
              <button onClick={props.requestPay}>충전하기</button>
            </S.BtnBox>
          </S.Wrapper>
        </Modal>
      )}
    </div>
  );
}
