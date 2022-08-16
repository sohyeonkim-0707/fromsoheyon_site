import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import ShopWrite from "../../../src/components/units/shop/write/shopWrite.container";

export default function ShopNewPage() {
  useAuth();
  return <ShopWrite isEdit={false} />;
}
