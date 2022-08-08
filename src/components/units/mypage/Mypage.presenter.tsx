import useMoveToPage from "../../commons/hooks/useMoveToPage";
import Payment from "../../commons/payment/payment.container";

import * as S from "./Mypage.styles";
import { IMyPageUIProps } from "./Mypage.types";

export default function MypageUI(props: IMyPageUIProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Container>
      <S.Wrapper01>
        <button>Mypage</button>
        <button onClick={onClickMoveToPage("/oderhistory")}>
          Oder History
        </button>
        <button onClick={onClickMoveToPage("/cart")}>Cart</button>
      </S.Wrapper01>
      <S.Wrapper02>
        <S.Title>MYPAGE</S.Title>
        <S.InnerBox>
          {props.userInfo?.fetchUserLoggedIn.name ? (
            <div>{props.userInfo?.fetchUserLoggedIn.name}님</div>
          ) : (
            <div>로그인을 해주세요.</div>
          )}
          <div>Point</div>
          {props.userInfo?.fetchUserLoggedIn.userPoint.amount ? (
            <div>
              {props.userInfo?.fetchUserLoggedIn.userPoint.amount.toLocaleString(
                "ko-KR"
              )}
              ₩
            </div>
          ) : (
            <div>0 ₩</div>
          )}
        </S.InnerBox>
      </S.Wrapper02>
      <S.Wrapper03>
        <Payment />
        <button>Customer Center</button>
      </S.Wrapper03>
    </S.Container>
  );
}
