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
import { FETCH_BOARD } from "../detail/detail.queris";
import CommnunityWriteUI from "./community.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./community.queris";
import { FormValues } from "./community.types";
import { editSchema, schema } from "./community.validation";

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

  // 📌 react-quill
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  // 📌 게시글 등록하기
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
      console.log("등록📌", result);
      alert("게시글을 등록합니다.");
      router.push(`/community/${result.data.createBoard._id}`);
    } catch (error) {
      // alert(error.message);
    }
  };

  // 📌 수정하기
  const onClickEditBoard = async (data: IUpdateBoardInput) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(data.fetchBoard?.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    if (!data.title && !data.contents && !data.youtubeUrl && !isChangedFiles) {
      alert("수정한 내용이 없습니다.");
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
      alert("게시글 수정이 완료되었습니다!");
      router.push(`/community/${result.data.updateBoard._id}`);
    } catch (error) {}
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
      // 사진
      fileUrls={fileUrls}
      // form
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      reset={reset}
      getValues={getValues}
      // 컴포넌트 재사용
      isEdit={props.isEdit}
    />
  );
}
