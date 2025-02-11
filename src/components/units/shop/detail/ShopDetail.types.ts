export interface IShopDetailUIProps {
  data: any;
  userInfo: any;
  onClickBuy: () => Promise<void>;
  onClickMoveToList: () => void;
  onClickMoveProductEdit: () => void;
  onClickDelete: () => Promise<void>;
  onClickBasket: (el: any) => () => void;
  onClickRoutingModal: () => void;
  onClickConfirmModal: () => void;
  onClickErrorModal: () => void;
  alertModal: boolean;
  modalContents: string;
  errorAlertModal: boolean;
  isRoute: boolean;
}
