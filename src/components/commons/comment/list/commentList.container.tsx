import MarketCommentListUI from "./commentList.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
} from "./commentList.queris";
import { FETCH_USER_LOGGED_IN } from "../../../units/login/Login.quries";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";

export default function MarketCommentList() {
  const router = useRouter();
  const [, setUseditemQuestionId] = useState("");

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.itemId) },
  });

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  function onLoadMore() {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  }

  //  댓글 삭제하기
  const onClickDelete = async (event) => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: String(event?.currentTarget.id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.itemId) },
          },
        ],
      });

      setUseditemQuestionId("");
      alert("댓글 삭제가 완료되었습니다!");
      router.push(`/shop/${router.query.itemId}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <MarketCommentListUI
      data={data}
      onLoadMore={onLoadMore}
      userData={userData}
      onClickDelete={onClickDelete}
    />
  );
}
