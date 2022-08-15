import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormStateReturn,
} from "react-hook-form";

export interface FormValues {
  name?: string;
  email?: string;
  password?: string;
}

export interface ISignUpProps {
  onClickSignup: (data: any) => Promise<void>;
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  formState: UseFormStateReturn<FieldValues>;
  onClickRoutingModal: () => void;
  onClickErrorModal: () => void;
  alertModal: boolean;
  modalContents: string;
  errorAlertModal: boolean;
}
