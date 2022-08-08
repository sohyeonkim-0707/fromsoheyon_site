import * as S from "./Cart.styles";
import { v4 as uuidv4 } from "uuid";
import useMoveToPage from "../../commons/hooks/useMoveToPage";
import { ICartUIProps } from "./Cart.types";

export default function CartUI(props: ICartUIProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Container>
      <S.Wrapper01>
        <button onClick={onClickMoveToPage("/mypage")}>Mypage</button>
        <button onClick={onClickMoveToPage("/oderhistory")}>
          Oder History
        </button>
        <button>Cart</button>
      </S.Wrapper01>

      <S.Wrapper02>
        {props.basketItems.length === 0 ? (
          <S.Title>CART</S.Title>
        ) : (
          <S.Title>CART({props.basketItems.length})</S.Title>
        )}

        {props.basketItems.length === 0 ? (
          <S.InnerBox>
            <S.Nodata>장바구니가 비어있습니다.</S.Nodata>
          </S.InnerBox>
        ) : (
          <>
            {props.basketItems.map((el: any) => (
              <S.InnerBox key={uuidv4()}>
                <S.Photo
                  id={el._id}
                  src={
                    el.images[0]
                      ? `https://storage.googleapis.com/${el.images?.[0]}`
                      : "/images/noimages.jpg"
                  }
                ></S.Photo>
                <S.Name>{el?.name}</S.Name>
                <S.Amount>1</S.Amount>
                <S.Price>{el?.price?.toLocaleString("ko-KR")}₩</S.Price>
                <S.CancleBtn src="./cancle.png"></S.CancleBtn>
              </S.InnerBox>
            ))}
          </>
        )}
      </S.Wrapper02>
      <S.Wrapper03>
        <div>Subtotal:</div>
        <div>0₩</div>
      </S.Wrapper03>
      <S.Wrapper04>
        <button>Checkout</button>
      </S.Wrapper04>
    </S.Container>
  );
}
