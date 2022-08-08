// 게시글 등록하기

import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import CommunityWrite from "../../../src/components/units/commnunity/write/community.container";

export default function CommnunityNewPage() {
  useAuth();
  return <CommunityWrite isEdit={false} />;
}
