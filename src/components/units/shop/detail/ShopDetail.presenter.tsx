import ShopCommentList from "../../../commons/comment/list/commentList.container";
import ShopCommentWrite from "../../../commons/comment/write/commetWrite.container";
import * as S from "./ShopDetail.styles";
import { IShopDetailUIProps } from "./ShopDetail.types";

export default function ShopDetailUI(props: IShopDetailUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.left>
          <S.Photo
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
          />
        </S.left>

        <S.right>
          <S.Inner01>
            <S.Title>{props.data?.fetchUseditem?.name}</S.Title>

            <S.Remark>{props.data?.fetchUseditem?.remark}ddd</S.Remark>

            <S.SizeBox>
              <S.Size>A1/ 594mm*841mm</S.Size>
            </S.SizeBox>

            <S.Contents>{props.data?.fetchUseditem?.contents}</S.Contents>
            <S.Price>
              {props.data?.fetchUseditem?.price?.toLocaleString("ko-KR")}₩
            </S.Price>
          </S.Inner01>
          <S.Inner>
            <S.BuyBtn onClick={props.onClickBasket(props.data?.fetchUseditem)}>
              Cart
            </S.BuyBtn>
            <S.BuyBtn onClick={props.onClickBuy}>Buy here</S.BuyBtn>
          </S.Inner>
        </S.right>
      </S.Wrapper>

      <S.BtnBox>
        <S.BackBtn onClick={props.onClickMoveToList}>Back to Shop</S.BackBtn>
        {props.data?.fetchUseditem.seller.email ===
        props.userInfo?.fetchUserLoggedIn.email ? (
          <div>
            <S.EditBtn type="button" onClick={props.onClickMoveProductEdit}>
              Edit
            </S.EditBtn>
            <S.DeleteBtn type="button" onClick={props.onClickDelete}>
              Delete
            </S.DeleteBtn>
          </div>
        ) : (
          <></>
        )}
      </S.BtnBox>
      <ShopCommentWrite />
      <ShopCommentList />
    </S.Container>
  );
}
