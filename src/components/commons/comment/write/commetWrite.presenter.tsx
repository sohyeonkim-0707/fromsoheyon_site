import AlertModal from "../../modals/01/AlertModal";
import ErrorModal from "../../modals/02/ErrorModal";
import * as S from "./commetWrite.styles";

export default function ShopCommentWriteUI(props) {
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
        <S.Title>Q&A</S.Title>
        <form
          onSubmit={props.handleSubmit(
            props.isEdit ? props.onClickUpdateComment : props.onClickComment
          )}
        >
          <S.Contents
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            {...props.register("contents")}
            defaultValue={props.el?.contents || ""}
          />
          <S.CommentBottm>
            <S.Count>{props.contentsLength}/100</S.Count>
            <S.Error>{props.formState.errors.contents?.message}</S.Error>
            <S.Button type="submit" isActive={props.formState.isValid}>
              {props.isEdit ? "Edit" : "Submit"}
            </S.Button>
          </S.CommentBottm>
        </form>
      </S.Container>
    </>
  );
}
