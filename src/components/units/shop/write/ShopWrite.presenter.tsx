/* eslint-disable array-callback-return */
import * as S from "./ShopWrite.styles";
import Upload from "../../../commons/uploads/upload.container";
import { v4 as uuidv4 } from "uuid";
import useMoveToPage from "../../../commons/hooks/useMoveToPage";

import AlertModal from "../../../commons/modals/01/AlertModal";
import ErrorModal from "../../../commons/modals/02/ErrorModal";
import { IShopWriteUIProps } from "./ShopWrite.types";

export default function ShopWriteUI(props: IShopWriteUIProps) {
  const { onClickMoveToPage } = useMoveToPage();
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
          props.isEdit ? props.onClcikEditProduct : props.onClickUploadProduct
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
            })}
          </S.left>

          <S.right>
            <S.Inner>
              <S.Title>Title</S.Title>
              <S.InputText
                type="text"
                {...props.register("name")}
                defaultValue={props.data?.fetchUseditem.name}
              ></S.InputText>
              <S.Error>{props.formState.errors.name?.message}</S.Error>
            </S.Inner>

            <S.InnerWrapeer>
              <div>
                <S.Title>Remark</S.Title>
                <S.InputText2
                  type="text"
                  {...props.register("remarks")}
                  defaultValue={props.data?.fetchUseditem.remarks}
                ></S.InputText2>
                <S.Error>{props.formState.errors.remarks?.message}</S.Error>
              </div>
              <div>
                <S.Title>Size</S.Title>
                <S.InputText2 type="text"></S.InputText2>
                <S.Error></S.Error>
              </div>
            </S.InnerWrapeer>

            <S.Inner>
              <S.Title>Story</S.Title>
              <S.InputText3
                type="text"
                {...props.register("contents")}
                defaultValue={props.data?.fetchUseditem.contents}
              ></S.InputText3>
              <S.Error>{props.formState.errors.contents?.message}</S.Error>
            </S.Inner>

            <S.Inner>
              <S.Title>Price</S.Title>
              <S.InputText
                type="text"
                {...props.register("price")}
                defaultValue={props.data?.fetchUseditem.price}
              ></S.InputText>
              <S.Error>{props.formState.errors.price?.message}</S.Error>
            </S.Inner>
          </S.right>
        </S.Wrapper>

        <S.BtnBox>
          <S.BackBtn type="button" onClick={onClickMoveToPage("/shop")}>
            Back to Shop
          </S.BackBtn>

          <div>
            <S.SubmitBtn
              onClick={
                props.isEdit
                  ? props.onClcikEditProduct
                  : props.onClickUploadProduct
              }
              isActive={props.formState.isValid}
            >
              {props.isEdit ? "Edit" : "Submit"}
            </S.SubmitBtn>
            <S.CancleBtn type="button" onClick={onClickMoveToPage("/shop")}>
              Cancle
            </S.CancleBtn>
          </div>
        </S.BtnBox>
      </S.Container>
    </>
  );
}
