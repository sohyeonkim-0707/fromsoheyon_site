import {
  FieldValues,
  FormState,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";

export interface FormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
  youtubeUrl?: string;
}

export interface ICommunityWriteProps {
  data: any;
  onClickUploadBoard: (data: any) => Promise<void>;
  onClickEditBoard: (data: any) => Promise<void>;
  onChangeContents: (value: string) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickImageDelete: (index: number) => () => void;
  fileUrls: string[];

  register: UseFormRegister<FormValues>;
  formState: FormState<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  reset: UseFormReset<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  isEdit: boolean;
}
