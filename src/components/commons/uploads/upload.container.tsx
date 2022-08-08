import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import UploadUI from "./upload.presenter";
import { UPLOAD_FILE } from "./upload.queris";
import { CheckFileValidation } from "./upload.validation";

export default function Upload(props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = CheckFileValidation(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <UploadUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
