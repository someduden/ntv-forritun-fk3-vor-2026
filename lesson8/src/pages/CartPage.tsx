import { Cart } from '@/features/cart';
import { useAppStore } from '@/shared/store/appStore';

export function CartPage() {
  // const { items, updateQuantity, removeItem } = useCart();
  const { items, updateQuantity, removeItem } = useAppStore();
  return (
    <Cart
      items={items}
      onQuantityChange={updateQuantity}
      onRemove={removeItem}
    />
  );
}
