import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IMutationLoginUserArgs } from "../../../commons/types/generated/types";

export interface FormValues {
  email?: string;
  password?: string;
}

export interface ILoginUIProps {
  onClickSignUp: () => void;
  onClickLogin: (data: IMutationLoginUserArgs) => Promise<void>;
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  formState: FormState<FormValues>;
  onClickRoutingModal: () => void;
  onClickErrorModal: () => void;
  alertModal: boolean;
  modalContents: string;
  errorAlertModal: boolean;
}
