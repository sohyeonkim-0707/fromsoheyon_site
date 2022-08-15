import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IMutationCreateUserArgs } from "../../../commons/types/generated/types";
import SignUpUI from "./signup.presenter";
import { CREATE_USER } from "./signup.queris";
import { schema } from "./signup.validation";

export default function SignUp() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);

  // 이동모달
  const onClickRoutingModal = () => {
    router.push("/login");
    setAlertModal(false);
  };

  // 에러모달
  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };

  const onClickSignup = async (data: IMutationCreateUserArgs) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            ...data,
          },
        },
      });
      setAlertModal(true);
      setModalContents("회원가입을 축하합니다.");
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  return (
    <SignUpUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignup={onClickSignup}
      onClickRoutingModal={onClickRoutingModal}
      onClickErrorModal={onClickErrorModal}
      alertModal={alertModal}
      modalContents={modalContents}
      errorAlertModal={errorAlertModal}
    />
  );
}
