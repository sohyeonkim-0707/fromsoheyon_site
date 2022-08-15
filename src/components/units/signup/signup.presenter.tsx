import AlertModal from "../../commons/modals/01/AlertModal";
import ErrorModal from "../../commons/modals/02/ErrorModal";
import * as S from "./signup.styles";
import { ISignUpProps } from "./signup.types";

export default function SignUpUI(props: ISignUpProps) {
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
        <S.Wrapper onSubmit={props.handleSubmit(props.onClickSignup)}>
          <S.Box>
            <S.Title>E-MAIL</S.Title>
            <S.TextBox
              type="text"
              placeholder="이메일을 입력해주세요."
              {...props.register("email")}
            />
            <S.Error>{props.formState.errors.email?.message}</S.Error>
          </S.Box>
          <S.Box>
            <S.Title>NAME</S.Title>
            <S.TextBox
              type="text"
              placeholder="이름을 입력해주세요."
              {...props.register("name")}
            />
            <S.Error>{props.formState.errors.name?.message}</S.Error>
          </S.Box>
          <S.Box>
            <S.Title>PASSWORD</S.Title>
            <S.TextBox
              type="password"
              placeholder="비밀번호을 입력해주세요."
              {...props.register("password")}
            />
            <S.Error>{props.formState.errors.name?.password}</S.Error>
          </S.Box>
          <S.Box>
            <S.Title>CONFIRM PASSWORD</S.Title>
            <S.TextBox
              type="password"
              placeholder="비밀번호를 다시한번 입력해주세요."
              {...props.register("password")}
            />
            <S.Error>{props.formState.errors.confirmPassword?.message}</S.Error>
          </S.Box>
          <S.Box>
            <S.SignUpBtn isActive={props.formState.isValid}>
              SIGN UP
            </S.SignUpBtn>
          </S.Box>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
