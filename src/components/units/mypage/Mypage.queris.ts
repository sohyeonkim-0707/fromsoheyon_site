import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING = gql`
  query fetchPointTransactionsCountOfLoading {
    fetchPointTransactionsCountOfLoading
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

export const FETCH_USED_ITEMS_I_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      price
      soldAt
    }
  }
`;
