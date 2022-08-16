import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import ShopWrite from "../../../src/components/units/shop/write/ShopWrite.container";

export default function ShopNewPage() {
  useAuth();
  return <ShopWrite isEdit={false} />;
}
