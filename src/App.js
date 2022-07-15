import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import Home from './pages/Home/Home';
import UserList from './pages/UserList/UserList';
import User from './pages/User/User';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';
import NewUser from './pages/NewUser/NewUser';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/product/:userId" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
