import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from '@/components/Layout';
import { ProductsPage } from '@/pages/ProductsPage';
import { CartPage } from '@/pages/CartPage';
import { CartProvider } from './features/cart/context/CartContext';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
