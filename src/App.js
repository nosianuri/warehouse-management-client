import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import About from './About/About';
import './App.css';
import AddItem from './pages/AddItem/AddItem';
import Blogs from './pages/Blogs/Blogs';
import CheckOut from './pages/CheckOut/CheckOut/CheckOut';
import Home from './pages/Home/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import Login from './pages/Login/Login';
import ManageInfo from './pages/ManageInfo/ManageInfo';
import ManageItems from './pages/ManageItems/ManageItems';
import MyItem from './pages/MyItem/MyItem';
import NotFound from './pages/NotFound/NotFound';
import OrderItem from './pages/OrderItem/OrderItem';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Footer from './pages/Shareable/Footer/Footer';
import Header from './pages/Shareable/Header/Header';
import SignUp from './pages/SignUp/SignUp';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='myItem' element={<MyItem></MyItem>}></Route>
        <Route path='/inventory/:inventoryId' element={<ItemDetail></ItemDetail>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/manageitem' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <OrderItem></OrderItem>
          </RequireAuth>
        }></Route>

        <Route path='/manageinfo' element={<ManageInfo></ManageInfo>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/checkout/:inventoryId' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
