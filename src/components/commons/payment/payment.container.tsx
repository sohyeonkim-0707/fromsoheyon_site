import PaymentUI from "./payment.presenter";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../units/login/Login.quries";

declare const window: typeof globalThis & {
  IMP: any;
};

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
    }
  }
`;

export default function Payment() {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangeOption = (event) => {
    setAmount(event.target.value);
  };

  // iport 충전하기
  const requestPay = () => {
    setIsOpen(false);
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "Point",
        amount: amount,
        buyer_email: userInfo.fetchUserLoggedIn.email,
        buyer_name: userInfo.fetchUserLoggedIn.name,
        buyer_tel: "010-1234-1234",
        buyer_addr: "피동보다능동",
        buyer_postcode: "01181",
        m_redirect_url: "http:localhost:3000/mypage",
      },
      async (rsp: any) => {
        if (rsp.success) {
          try {
            await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            alert("충전이 완료되었습니다.");
          } catch (error) {
            alert(error.message);
          }
        } else {
          alert("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };

  return (
    <PaymentUI
      isOpen={isOpen}
      onToggleModal={onToggleModal}
      onChangeOption={onChangeOption}
      requestPay={requestPay}
    />
  );
}
