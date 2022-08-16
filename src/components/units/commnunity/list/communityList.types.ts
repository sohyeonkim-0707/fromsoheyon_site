import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";

export interface ICommunityUIProps {
  data: any;
  count: number;
  refetch: (
    variables?: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>;
  refetchBoardsCount: (
    variables?: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;

  onClickNew: () => void;
  keyword: string;
  onChangeKeyword: (value: string) => void;
}
