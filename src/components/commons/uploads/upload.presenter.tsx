import * as S from "./upload.styles";

export default function UploadUI(props) {
  return (
    <>
      {props.fileUrl ? (
        // 사진미리보기
        <S.UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        // 눈에 보이는 곳
        <S.UploadBtn type="button" onClick={props.onClickUpload}>
          Upload your photo
        </S.UploadBtn>
      )}
      {/* 사진 올리는 곳, 숨김처리 */}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
