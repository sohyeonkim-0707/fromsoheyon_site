export interface ICommunityDetailUIProps {
  data: any;
  userInfo: any;
  onClickToEdit: () => void;
  onClickDelete: () => Promise<void>;
  onClickRoutingModal: () => void;
  onClickConfirmModal: () => void;
  onClickErrorModal: () => void;
  alertModal: boolean;
  modalContents: string;
  errorAlertModal: boolean;
  isRoute: boolean;
}
