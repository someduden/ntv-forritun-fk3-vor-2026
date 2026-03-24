import { Cart } from '@/features/cart';
import { useCart } from '@/features/cart/context/useCart';

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
