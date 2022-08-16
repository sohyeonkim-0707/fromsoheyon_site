import Pagination from "../../../commons/pagination";
import Item from "./item/item.container";
import * as S from "./communityList.styles";
import { v4 as uuidv4 } from "uuid";
import { ICommunityUIProps } from "./communityList.types";
import SearchBars from "../../../commons/searchBar";

export default function CommunityUI(props: ICommunityUIProps) {
  return (
    <S.Container>
      <S.InnerTop>
        <h1>COMMUNITY</h1>
        <SearchBars
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          onChangeKeyword={props.onChangeKeyword}
        />
      </S.InnerTop>

      <S.Table>
        <S.Row>
          <S.Number>N</S.Number>
          <S.Title>Title</S.Title>
          <S.Writer>Writer</S.Writer>
          <S.Date>Date</S.Date>
        </S.Row>
        {props.data?.fetchBoards.map((el, index) => (
          <Item
            key={uuidv4()}
            el={el}
            index={index}
            onClickDetail={props.onClickDetail}
          />
        ))}
      </S.Table>
      <S.PaginationBox>
        <Pagination refetch={props.refetch} count={props.count} />
      </S.PaginationBox>

      <S.BtnBox>
        <S.WriteBtn onClick={props.onClickNew}>Write</S.WriteBtn>
      </S.BtnBox>
    </S.Container>
  );
}
