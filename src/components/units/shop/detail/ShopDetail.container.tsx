import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { basketItemState } from "../../../../commons/store";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../login/Login.quries";
import ShopDetailUI from "./shopDetail.presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
} from "./shopDetail.queris";

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

  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);
  const [isRoute, setIsRoute] = useState(false);

  // 이동모달
  const onClickRoutingModal = () => {
    router.push(`/shop`);
    setAlertModal(false);
  };
  // 확인모달
  const onClickConfirmModal = () => {
    setAlertModal(false);
  };

  // 에러모달
  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };

  const onClickMoveToList = () => {
    router.push("/shop");
  };

  const onClickMoveProductEdit = () => {
    router.push(`/shop/${router.query.itemId}/edit`);
  };

  // 장바구니
  const onClickBasket = (el: any) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const temp = baskets.filter((basketEl: any) => basketEl._id === el._id);

    if (temp.length === 1) {
      setAlertModal(true);
      setModalContents("이미 장바구니에 담겨있는 상품입니다.");
      return;
    }

    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));

    setBasketItems(baskets);
    setAlertModal(true);
    setModalContents("장바구니에 담았습니다.");
  };

  // 구매하기
  const onClickBuy = async () => {
    if (
      userInfo?.fetchUserLoggedIn.email === data?.fetchUseditem.seller.email
    ) {
      setAlertModal(true);
      setModalContents("본인의 상품은 구매하실 수 없습니다.");
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
          setAlertModal(true);
          setModalContents("구매가 완료되었습니다.");
          setIsRoute(true);
        } catch (error: any) {
          setModalContents(error.message);
          setErrorAlertModal(true);
        }
      } else {
        alert("포인트가 부족합니다. 충전을 먼저 해주세요.");
      }
    }
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.itemId) },
      });
      setAlertModal(true);
      setModalContents("삭제가 완료되었습니다.");
      setIsRoute(true);
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
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
      onClickRoutingModal={onClickRoutingModal}
      onClickConfirmModal={onClickConfirmModal}
      onClickErrorModal={onClickErrorModal}
      alertModal={alertModal}
      modalContents={modalContents}
      errorAlertModal={errorAlertModal}
      isRoute={isRoute}
    />
  );
}
