import _ from "lodash";
import { ChangeEvent } from "react";
import styled from "@emotion/styled";

const SearchBox = styled.input`
  width: 350px;
  height: 40px;
  border: 1px solid #f8f7f9;
  border-radius: 7px;
  background-image: url(/search.png);
  background-repeat: no-repeat;
  background-size: 22px;
  background-position: 320px center;
  background-color: #f8f7f9;
  outline: none;

  ::placeholder {
    padding-left: 10px;
  }
`;

export default function SearchBars(props: any) {
  const getDebounce = _.debounce((data: any) => {
    props.refetch({ search: data, page: 1 });
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <SearchBox
      type="text"
      onChange={onChangeSearch}
      placeholder="제목을 검색해주세요."
    />
  );
}
