import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import CommunityDetail from "../../../src/components/units/commnunity/detail/detail.container";

export default function CommunityDetailPage() {
  useAuth();
  return <CommunityDetail />;
}
