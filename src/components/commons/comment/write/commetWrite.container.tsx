import ShopCommentWriteUI from "./commetWrite.presenter";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_USED_ITEM_QUESTION } from "./commetWrite.queris";
import {
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "../list/commentList.queris";

const schema = yup.object({
  contents: yup
    .string()
    .max(100, "최대 100글자까지 가능합니다.")
    .required("내용을 입력해주세요"),
});

export default function ShopCommentWrite(props) {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const { register, handleSubmit, formState, watch, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);

  const onClickRoutingModal = () => {
    setAlertModal(false);
  };

  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };

  const contentsLength = watch().contents?.length;

  // 댓글 등록하기
  const onClickComment = async (data) => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: String(router.query.itemId),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.itemId) },
          },
        ],
      });
      setAlertModal(true);
      setModalContents("댓글 등록이 완료되었습니다!");
      reset();
    } catch (error) {
      setModalContents("댓글이 등록되지 않았습니다.");
      setErrorAlertModal(true);
    }
  };

  // 댓글 수정하기
  const onClickUpdateComment = async (data) => {
    if (!props.el?._id) return;
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemQuestionId: String(props.el._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.itemId) },
          },
        ],
      });
      setAlertModal(true);
      setModalContents("댓글이 수정되었습니다.");
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) {
        setModalContents(error.message);
        setErrorAlertModal(true);
      }
    }
  };

  useEffect(() => {
    reset({
      contents: props.data?.fetchUseditem.contents,
    });
  }, []);

  return (
    <ShopCommentWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickComment={onClickComment}
      contentsLength={contentsLength}
      isEdit={props.isEdit}
      onClickUpdateComment={onClickUpdateComment}
      el={props.el}
      alertModal={alertModal}
      modalContents={modalContents}
      errorAlertModal={errorAlertModal}
      onClickRoutingModal={onClickRoutingModal}
      onClickErrorModal={onClickErrorModal}
    />
  );
}
