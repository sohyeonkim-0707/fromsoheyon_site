import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

export default function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path) => () => {
    setVisitedPage(path);
    router.push(path);
  };
  // 객체로 리턴
  return {
    visitedPage,
    onClickMoveToPage,
  };
}
