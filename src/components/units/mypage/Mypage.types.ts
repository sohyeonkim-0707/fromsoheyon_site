import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface IMyPageUIProps {
  userInfo?: any;
  data?: any;
  refetch: (
    variables?: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>;
  pointCount: any;
}
