import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "../../login/Login.quries";
import CommunityDetailUI from "./detail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./detail.queris";

export default function CommunityDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickToEdit = () => {
    router.push(`/community/${router.query.boardId}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });

      alert("삭제되었습니다!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <CommunityDetailUI
      data={data}
      userInfo={userInfo}
      onClickToEdit={onClickToEdit}
      onClickDelete={onClickDelete}
    />
  );
}
