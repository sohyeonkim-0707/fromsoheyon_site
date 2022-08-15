import ShopCommentAnswerUI from "./answer.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../answerList/answerList.queris";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./answer.queris";

export default function ShopCommentAnswer(props) {
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  const [contents, setContents] = useState(props.el?.contents || "");
  const [isValid, setIsValid] = useState(false);

  const onChangeContents = (event) => {
    if (event.target.value === "") {
      setIsValid(false);
    } else {
      setContents(event.target.value);
      setIsValid(true);
    }
  };

  // 답글 등록하기
  const submitAnswer = async (data) => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: props?.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props?.id },
          },
        ],
      });
      setIsValid(false);
      props.setIsAnswer((prev) => !prev);
      alert("답글이 등록되었습니다.");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 답글 수정하기
  const updateAnswer = async (data) => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionAnswerId: props?.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props?.id },
          },
        ],
      });
      props.setIsEdit(false);
      alert("답글이 수정되었습니다.");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <ShopCommentAnswerUI
      onChangeContents={onChangeContents}
      submitAnswer={submitAnswer}
      updateAnswer={updateAnswer}
      isValid={isValid}
      setIsAnswer={props.setIsAnswer}
      contents={contents}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
