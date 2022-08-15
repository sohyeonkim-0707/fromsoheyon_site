import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface FormValues {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: string;
}

export interface IShopWriteUIProps {
  data?: Pick<IQuery, "fetchUseditem">;

  onClickUploadProduct: (data: any) => Promise<void>;
  onClcikEditProduct: (data: any) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickImageDelete: (index: number) => () => void;

  fileUrls: string[];
  register: UseFormRegister<FieldValues>;
  formState: FormState<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  isEdit: boolean;

  onClickRoutingModal: () => void;
  onClickErrorModal: () => void;
  onClickUpdatedModal: () => void;
  alertModal: boolean;
  modalContents: string;
  errorAlertModal: boolean;
}
