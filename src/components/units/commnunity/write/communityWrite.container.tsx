import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  ICreateBoardInput,
  IQuery,
  IQueryFetchBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD } from "../detail/communityDetail.queris";
import CommnunityWriteUI from "./communityWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./communityWrite.queris";
import { FormValues } from "./communityWrite.types";
import { editSchema, schema } from "./communityWrite.validation";

export default function CommunityWrite(props: any) {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", "", "", ""]);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    getValues,
    trigger,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(props.isEdit ? editSchema : schema),
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);

  const [boardId, setBoardId] = useState("");

  const onClickRoutingModal = () => {
    router.push(`/community/${boardId}`);
    setAlertModal(false);
  };

  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };

  const onClickUpdatedModal = () => {
    router.push(`/community/${router.query.useditemId}`);
    setAlertModal(false);
  };

  // 게시글 등록하기
  const onClickUploadBoard = async (data: ICreateBoardInput) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            images: fileUrls,
            youtubeUrl: data.youtubeUrl,
          },
        },
      });
      setAlertModal(true);
      setModalContents("게시물을 등록합니다.");
      setBoardId(result.data.createBoard._id);
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  // 수정하기
  const onClickEditBoard = async (data: IUpdateBoardInput) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(data.fetchBoard?.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    if (!data.title && !data.contents && !data.youtubeUrl && !isChangedFiles) {
      setAlertModal(true);
      setModalContents("수정한 내용이 없습니다.");
    }
    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          password: data.password,
          updateBoardInput: {
            title: data.title,
            contents: data.contents,
            images: fileUrls,
            youtubeUrl: data.youtubeUrl,
          },
        },
      });
      setAlertModal(true);
      setModalContents("게시글 수정이 완료되었습니다");
      setBoardId(result.data.updateBoard._id);
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickImageDelete = (index: number) => () => {
    const newFileUrls = [...fileUrls];
    newFileUrls.splice(index, 1);
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (data?.fetchBoard.images?.length) {
      setFileUrls([...data?.fetchBoard.images]);
    }
  }, [data]);

  return (
    <CommnunityWriteUI
      data={data}
      onClickUploadBoard={onClickUploadBoard}
      onClickEditBoard={onClickEditBoard}
      onChangeContents={onChangeContents}
      onChangeFileUrls={onChangeFileUrls}
      onClickImageDelete={onClickImageDelete}
      fileUrls={fileUrls}
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      reset={reset}
      getValues={getValues}
      isEdit={props.isEdit}
      onClickRoutingModal={onClickRoutingModal}
      onClickErrorModal={onClickErrorModal}
      onClickUpdatedModal={onClickUpdatedModal}
      alertModal={alertModal}
      modalContents={modalContents}
      errorAlertModal={errorAlertModal}
    />
  );
}
