import AlertModal from "../../commons/modals/01/AlertModal";
import ErrorModal from "../../commons/modals/02/ErrorModal";
import * as S from "./Login.styles";
import { ILoginUIProps } from "./Login.types";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <>
      {props.alertModal && (
        <AlertModal
          onClickExit={props.onClickRoutingModal}
          contents={props.modalContents}
        />
      )}

      {props.errorAlertModal && (
        <ErrorModal
          onClickExit={props.onClickErrorModal}
          contents={props.modalContents}
        />
      )}
      <S.Container>
        <S.Wrapper onSubmit={props.handleSubmit(props.onClickLogin)}>
          <S.Box>
            <S.Title>ID</S.Title>
            <S.Id
              type="text"
              placeholder="이메일을 입력해주세요."
              {...props.register("email")}
            />
            <S.Error>{props.formState.errors.email?.message}</S.Error>
          </S.Box>
          <S.Box>
            <S.Title>PASSWORD</S.Title>
            <S.Password
              type="password"
              placeholder="비밀번호를 입력해주세요."
              {...props.register("password")}
            />
            <S.Error>{props.formState.errors.password?.message}</S.Error>
          </S.Box>
          <S.Box>
            <S.LoginBtn isActive={props.formState.isValid}>LOGIN</S.LoginBtn>
            <S.Forgot>Forgotten ID or Password</S.Forgot>
          </S.Box>
          <S.Box>
            <S.SignUpBtn type="button" onClick={props.onClickSignUp}>
              SIGN UP
            </S.SignUpBtn>
          </S.Box>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
