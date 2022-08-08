import * as S from "./answer.styles";

export default function ShopCommentAnswerUI(props: any) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Contents
          placeholder="답글을 등록해주세요."
          onChange={props.onChangeContents}
          defaultValue={props?.contents}
          maxLength={100}
        />

        <S.CommentBottm>
          <S.Count>{props?.contents?.length}/100</S.Count>
          <S.Button
            onClick={props.isEdit ? props.updateAnswer : props.submitAnswer}
            isActive={props.isEdit ? true : props.isValid}
            disabled={props.isEdit ? false : !props.isValid}
          >
            {props.isEdit ? "Edit" : "Submit"}
          </S.Button>
        </S.CommentBottm>
      </S.Wrapper>
    </S.Container>
  );
}
