import { useState } from "react";
import * as S from "../commentList.styles";
import ShopCommentWrite from "../../write/commetWrite.container";
import { getDate } from "../../../../../commons/libraries/date";
import ShopCommentAnswer from "../../answer/answer.container";
import { FETCH_USER_LOGGED_IN } from "../../../../units/login/Login.quries";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM } from "../../../../units/shop/detail/ShopDetail.queris";
import { useRouter } from "next/router";
import AnswerList from "../../answerList/answerList.container";

export default function ShopCommentListUIItem(props) {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: useditemData } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.itemId },
  });

  const onClickUpdate = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickAnswer = () => {
    setIsAnswer((prev) => !prev);
  };

  return (
    <>
      {!isEdit && (
        <S.Container>
          <S.TopWrapper>
            <S.Name>{props.el?.user.name}</S.Name>

            <S.OptionWrapper>
              <S.EditIcon onClick={onClickUpdate} />
              <S.DeleteIcon id={props.id} onClick={props.onClickDelete} />
            </S.OptionWrapper>
          </S.TopWrapper>

          <S.Contents>{props.el?.contents}</S.Contents>
          <S.BottomWrapper>
            <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
            {useditemData?.fetchUseditem.seller._id ===
              userInfo?.fetchUserLoggedIn._id && (
              <S.ReplyBtn onClick={onClickAnswer}>Reply</S.ReplyBtn>
            )}
          </S.BottomWrapper>
        </S.Container>
      )}
      {isEdit && (
        <ShopCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
      {isAnswer && (
        <ShopCommentAnswer setIsAnswer={setIsAnswer} id={props.id} />
      )}
      <AnswerList id={props.id} />
    </>
  );
}
