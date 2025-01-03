import { Routes, Route } from 'react-router';
import { app, analytics } from '@/utils/firebase';
import { Login } from '@/containers/pages/login';
import { Layout } from '@/containers/layout';
import { Dashboard } from '@/containers/pages/dashboard';
import { Products } from '@/containers/pages/products';
import { Categories } from '@/containers/pages/categories';
import { Orders } from '@/containers/pages/orders';
import { Users } from '@/containers/pages/users';
import { Articles } from '@/containers/pages/articles';
import { Settings } from '@/containers/pages/settings';

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="orders" element={<Orders />} />
        <Route path="users" element={<Users />} />
        <Route path="articles" element={<Articles />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
