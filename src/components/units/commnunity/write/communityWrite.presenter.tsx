/* eslint-disable array-callback-return */
import * as S from "./communityWrite.styles";
import Upload from "../../../commons/uploads/upload.container";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useMoveToPage from "../../../commons/hooks/useMoveToPage";
import { ICommunityWriteProps } from "./communityWrite.types";
import AlertModal from "../../../commons/modals/01/AlertModal";
import ErrorModal from "../../../commons/modals/02/ErrorModal";

export default function CommnunityWriteUI(props: ICommunityWriteProps) {
  const { onClickMoveToPage } = useMoveToPage();
  useEffect(() => {
    props.reset({ contents: props.data?.fetchBoard.contents });
  }, [props.data?.fetchBoard.contents]);

  return (
    <>
      {props.alertModal && (
        <AlertModal
          onClickExit={
            props.isEdit ? props.onClickUpdatedModal : props.onClickRoutingModal
          }
          contents={props.modalContents}
        />
      )}

      {props.errorAlertModal && (
        <ErrorModal
          onClickExit={props.onClickErrorModal}
          contents={props.modalContents}
        />
      )}
      <S.Container
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickEditBoard : props.onClickUploadBoard
        )}
      >
        <S.Wrapper>
          <S.left>
            {props.fileUrls.map((el: any, index: number) => {
              if (index === 0)
                return (
                  <div>
                    <Upload
                      type="button"
                      key={uuidv4()}
                      index={index}
                      fileUrl={el}
                      onChangeFileUrls={props.onChangeFileUrls}
                    />
                    <S.DeleteBtn onClick={props.onClickImageDelete(index)}>
                      X
                    </S.DeleteBtn>
                  </div>
                );
              if (index === 0)
                return (
                  <div>
                    <Upload
                      type="button"
                      key={uuidv4()}
                      index={index}
                      fileUrl={el}
                      onChangeFileUrls={props.onChangeFileUrls}
                    />
                    <S.DeleteBtn onClick={props.onClickImageDelete(index)}>
                      X
                    </S.DeleteBtn>
                  </div>
                );
            })}
          </S.left>

          <S.right>
            <S.Inner>
              <S.Title>Title</S.Title>
              <S.InputText
                type="text"
                placeholder="제목을 입력해주세요."
                {...props.register("title")}
                defaultValue={props.data?.fetchBoard.title}
              ></S.InputText>
              <S.Error>{props.formState.errors.title?.message}</S.Error>
            </S.Inner>

            <S.Inner2>
              <S.InnerWrapper>
                <S.Title>Writer</S.Title>
                <S.InputText2
                  type="text"
                  placeholder="이름을 입력해주세요."
                  {...props.register("writer")}
                  defaultValue={props.data?.fetchBoard.writer}
                ></S.InputText2>
                <S.Error>{props.formState.errors.writer?.message}</S.Error>
              </S.InnerWrapper>

              <S.InnerWrapper>
                <S.Title>Password</S.Title>
                <S.InputText2
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  {...props.register("password")}
                ></S.InputText2>
                <S.Error>{props.formState.errors.password?.message}</S.Error>
              </S.InnerWrapper>
            </S.Inner2>

            <S.Inner>
              <S.Title>Contents</S.Title>
              <S.InputText3
                placeholder="내용을 입력해주세요."
                onChange={props.onChangeContents}
                value={props.getValues("contents") || ""}
              ></S.InputText3>
            </S.Inner>
            <S.Error>{props.formState.errors.contents?.message}</S.Error>

            <S.Inner>
              <S.Title>Youtube</S.Title>
              <S.InputText
                type="text"
                placeholder="링크를 입력해주세요."
                {...props.register("youtubeUrl")}
                defaultValue={props.data?.fetchBoard.youtubeUrl}
              ></S.InputText>
              <S.Error></S.Error>
            </S.Inner>
          </S.right>
        </S.Wrapper>
        <S.BtnBox>
          <S.BackBtn type="button">Back to Shop</S.BackBtn>
          <div>
            <S.SubmitBtn
              onClick={
                props.isEdit ? props.onClickEditBoard : props.onClickUploadBoard
              }
              isActive={props.formState.isValid}
            >
              {props.isEdit ? "Edit" : "Submit"}
            </S.SubmitBtn>
            <S.CancleBtn
              type="button"
              onClick={onClickMoveToPage("/community")}
            >
              Cancle
            </S.CancleBtn>
          </div>
        </S.BtnBox>
      </S.Container>
    </>
  );
}
