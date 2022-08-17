import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../login/Login.quries";
import CommunityDetailUI from "./communityDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./communityDetail.queris";

export default function CommunityDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);
  const [isRoute, setIsRoute] = useState(false);

  const onClickRoutingModal = () => {
    router.push(`/community`);
    setAlertModal(false);
  };

  const onClickConfirmModal = () => {
    setAlertModal(false);
  };

  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };

  const onClickToEdit = () => {
    router.push(`/community/${router.query.boardId}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.boardId) },
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
    <CommunityDetailUI
      data={data}
      userInfo={userInfo}
      onClickToEdit={onClickToEdit}
      onClickDelete={onClickDelete}
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
