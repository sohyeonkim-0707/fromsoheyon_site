import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { basketItemState } from "../../../../commons/store";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../login/Login.quries";
import ShopDetailUI from "./ShopDetail.presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
} from "./ShopDetail.queris";

export default function ShopDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.itemId },
  });
  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);
  const [, setBasketItems] = useRecoilState(basketItemState);

  // 📌 장바구니
  const onClickBasket = (el: any) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const temp = baskets.filter((basketEl: any) => basketEl._id === el._id);

    if (temp.length === 1) {
      alert("이미 장바구니에 담겨있는 상품입니다.");
      return;
    }

    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));

    setBasketItems(baskets);

    alert("장바구니에 담았습니다.");
  };

  // 📌 구매하기
  const onClickBuy = async () => {
    if (
      userInfo?.fetchUserLoggedIn.email === data?.fetchUseditem.seller.email
    ) {
      alert("본인의 상품은 구매하실 수 없습니다.");
    } else {
      if (
        userInfo?.fetchUserLoggedIn.userPoint?.amount >=
        data?.fetchUseditem.price
      ) {
        try {
          await createPointTransactionOfBuyingAndSelling({
            variables: {
              useritemId: String(router.query.itemId),
            },
          });
          alert("구매가 완료되었습니다.");
        } catch (error: any) {
          alert(error.message);
        }
      } else {
        alert("포인트가 부족합니다. 충전을 먼저 해주세요.");
      }
    }
  };

  const onClickMoveToList = () => {
    router.push("/shop");
  };

  const onClickMoveProductEdit = () => {
    router.push(`/shop/${router.query.itemId}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.itemId) },
      });
      alert("삭제가 완료되었습니다.");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ShopDetailUI
      data={data}
      userInfo={userInfo}
      onClickBuy={onClickBuy}
      onClickMoveToList={onClickMoveToList}
      onClickMoveProductEdit={onClickMoveProductEdit}
      onClickDelete={onClickDelete}
      onClickBasket={onClickBasket}
    />
  );
}
