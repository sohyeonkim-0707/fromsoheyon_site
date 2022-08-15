import * as S from "./communityDetail.styles";

import Dompurify from "dompurify";
import ReactPlayer from "react-player";
import { getDate } from "../../../../commons/libraries/date";
import useMoveToPage from "../../../commons/hooks/useMoveToPage";
import { ICommunityDetailUIProps } from "./communityDetail.types";
import AlertModal from "../../../commons/modals/01/AlertModal";
import ErrorModal from "../../../commons/modals/02/ErrorModal";

export default function CommunityDetailUI(props: ICommunityDetailUIProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      {props.alertModal && (
        <AlertModal
          onClickExit={
            props.isRoute
              ? props.onClickRoutingModal
              : props.onClickConfirmModal
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
      <S.Container>
        <S.Name>{props.data?.fetchBoard.writer}</S.Name>
        <S.Date>
          {props.data
            ? getDate(props.data?.fetchBoard.createdAt)
            : "loading..."}
        </S.Date>
        <S.Title>{props.data?.fetchBoard.title}</S.Title>

        {props.data?.fetchBoard.images
          ?.filter((el: string) => el)
          .map((el: string, index: number) => (
            <S.Img key={index} src={`https://storage.googleapis.com/${el}`} />
          ))}

        {typeof window !== "undefined" && (
          <S.Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.data?.fetchBoard.contents),
            }}
          />
        )}

        <S.Video>
          {props.data?.fetchBoard.youtubeUrl && (
            <ReactPlayer url={String(props.data?.fetchBoard.youtubeUrl)} />
          )}
        </S.Video>

        <S.BtnBox>
          <S.Backbtn onClick={onClickMoveToPage("/community")}>
            Back to List
          </S.Backbtn>

          <div>
            <S.EditBtn onClick={props.onClickToEdit}>Edit</S.EditBtn>
            <S.DeleteBtn onClick={props.onClickDelete}>Delete</S.DeleteBtn>
          </div>
        </S.BtnBox>
      </S.Container>
    </>
  );
}
