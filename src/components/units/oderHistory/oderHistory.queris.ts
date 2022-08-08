import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfBuying(search: $search, page: $page) {
      _id
      amount
      status
      useditem {
        name
        price
        soldAt
      }
    }
  }
`;
export const FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING = gql`
  query fetchPointTransactionsCountOfBuying {
    fetchPointTransactionsCountOfBuying
  }
`;
