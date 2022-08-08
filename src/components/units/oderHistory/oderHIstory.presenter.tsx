import * as S from "./oderHIstory.styles";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../commons/libraries/date";
import useMoveToPage from "../../commons/hooks/useMoveToPage";
import { IOderHistoryUIProps } from "./oderHistory.types";

export default function OderHistoryUI(props: IOderHistoryUIProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Container>
      <S.Wrapper01>
        <button onClick={onClickMoveToPage("/mypage")}>Mypage</button>
        <button>Oder History</button>
        <button onClick={onClickMoveToPage("/cart")}>Cart</button>
      </S.Wrapper01>

      <S.Wrapper02>
        <S.Title>ORDER HISTORY</S.Title>

        {props.data?.fetchPointTransactionsOfBuying === undefined ? (
          <S.InnerBox>
            <S.NoProduct>구매한 상품이 없습니다.</S.NoProduct>
          </S.InnerBox>
        ) : (
          <>
            {props.data?.fetchPointTransactionsOfBuying.map((el, index) => (
              <S.InnerBox key={uuidv4()}>
                <S.Name>{el.useditem.name}</S.Name>
                <S.Price> {el.useditem.price.toLocaleString("ko-KR")}₩</S.Price>
                <S.Date>{getDate(el.useditem.soldAt)}</S.Date>
              </S.InnerBox>
            ))}
          </>
        )}
      </S.Wrapper02>
    </S.Container>
  );
}
