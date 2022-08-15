import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import CommunityWrite from "../../../src/components/units/commnunity/write/communityWrite.container";

export default function CommnunityNewPage() {
  useAuth();
  return <CommunityWrite isEdit={false} />;
}
