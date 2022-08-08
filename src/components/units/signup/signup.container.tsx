import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
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

  const onClickSignup = async (data: IMutationCreateUserArgs) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            ...data,
          },
        },
      });
      alert("회원가입을 축하합니다.");
      router.push("/login");
    } catch (error) {
      alert(error.messgae);
    }
  };

  return (
    <SignUpUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignup={onClickSignup}
    />
  );
}
