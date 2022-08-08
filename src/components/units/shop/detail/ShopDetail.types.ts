export interface IShopDetailUIProps {
  data: any;
  userInfo: any;
  onClickBuy: () => Promise<void>;
  onClickMoveToList: () => void;
  onClickMoveProductEdit: () => void;
  onClickDelete: () => Promise<void>;
  onClickBasket: (el: any) => () => void;
}
