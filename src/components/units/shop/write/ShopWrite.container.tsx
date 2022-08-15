import ShopWriteUI from "./ShopWrite.presenter";
import { FormValues } from "./ShopWrite.types";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editSchema, schema } from "./ShopWrite.validation";
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM,
} from "./ShopWrite.queris";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export default function ShopWrite(props: any) {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", "", "", ""]);

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.itemId) },
  });

  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: yupResolver(props.isEdit ? editSchema : schema),
    mode: "onChange",
  });

  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);

  const [useditemId, setUseditemId] = useState("");

  const onClickRoutingModal = () => {
    router.push(`/shop/${useditemId}`);
    setAlertModal(false);
  };

  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };

  const onClickUpdatedModal = () => {
    router.push(`/shop/${router.query.useditemId}`);
    setAlertModal(false);
  };

  // 상품 등록하기
  const onClickUploadProduct = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            images: fileUrls,
          },
        },
      });
      setAlertModal(true);
      setModalContents("상품을 등록합니다.");
      setUseditemId(result.data.createUseditem._id);
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  // 상품 수정하기
  const onClcikEditProduct = async (data: any) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(data?.fetchUseditem?.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    if (
      !data.name &&
      !data.remarks &&
      !data.contents &&
      !data.price &&
      !isChangedFiles
    ) {
      setAlertModal(true);
      setModalContents("수정한 내용이 없습니다.");
    }

    try {
      const result = await updateUseditem({
        variables: {
          useditemId: String(router.query.itemId),
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            images: fileUrls,
          },
        },
      });
      setAlertModal(true);
      setModalContents("상품 수정이 완료되었습니다!");
      setUseditemId(result.data.updateUseditem._id); //
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
    if (data?.fetchUseditem.images?.length) {
      setFileUrls([...data?.fetchUseditem.images]);
    }
  }, [data]);

  return (
    <ShopWriteUI
      data={data}
      onClickUploadProduct={onClickUploadProduct}
      onClcikEditProduct={onClcikEditProduct}
      onChangeFileUrls={onChangeFileUrls}
      onClickImageDelete={onClickImageDelete}
      fileUrls={fileUrls}
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
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
