import LoginUI from "./Login.presenter";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Login.validation";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./Login.quries";
import { useApolloClient, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { FormValues } from "../commnunity/write/communityWrite.types";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const client = useApolloClient();

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [errorAlertModal, setErrorAlertModal] = useState(false);

  const onClickRoutingModal = () => {
    router.push("/");
    setAlertModal(false);
  };

  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };

  const onClickLogin = async (data: IMutationLoginUserArgs) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);

      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });
      const userInfo = resultUserInfo.data?.fetchUserLoggedIn;
      setAlertModal(true);
      setModalContents(`${userInfo?.name}님 반갑습니다.`);
    } catch (error) {
      setModalContents(error.message);
      setErrorAlertModal(true);
    }
  };

  const onClickSignUp = () => {
    router.push("/signup");
  };

  return (
    <LoginUI
      onClickSignUp={onClickSignUp}
      onClickLogin={onClickLogin}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickRoutingModal={onClickRoutingModal}
      onClickErrorModal={onClickErrorModal}
      alertModal={alertModal}
      modalContents={modalContents}
      errorAlertModal={errorAlertModal}
    />
  );
}
