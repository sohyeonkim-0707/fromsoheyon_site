import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface ICommunityUIProps {
  data: any;
  count: number;
  refetch: (
    variables?: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>;
  refetchBoardsCount: (
    variables?: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>;
  onClickMoveToBoardDetail: (el: any) => (event: any) => void;
  onClickNew: () => void;
}
