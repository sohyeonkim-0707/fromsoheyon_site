export interface ICommunityDetailUIProps {
  data: any;
  userInfo: any;
  onClickToEdit: () => void;
  onClickDelete: () => Promise<void>;
}
