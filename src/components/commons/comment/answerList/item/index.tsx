import * as S from "../answerList.styles";
import MarketCommentAnswer from "../../answer/answer.container";
import { getDate } from "../../../../../commons/libraries/date";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  DELETE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "../answerList.queris";

export default function AnswerListItemUI(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  // 📌 답글 수정하기
  const onClickUpdateAnswer = () => {
    setIsEdit((prev) => !prev);
  };

  // 📌 답글 삭제하기
  const onClickDeleteAnswer = async (event) => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: { useditemQuestionAnswerId: String(event.currentTarget.id) },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props?.questionId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      {!isEdit && (
        <S.Container>
          <S.Wrapper>
            <S.TopWrapper>
              <S.Name>{props.el?.user.name}</S.Name>
              <div>
                <S.EditIcon onClick={onClickUpdateAnswer} />
                <S.DeleteIcon id={props.id} onClick={onClickDeleteAnswer} />
              </div>
            </S.TopWrapper>

            <S.Contents>{props.el?.contents}</S.Contents>

            <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
          </S.Wrapper>
        </S.Container>
      )}

      {isEdit && (
        <MarketCommentAnswer
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
          id={props.id}
        />
      )}
    </>
  );
}
