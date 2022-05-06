import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import MyItem from './pages/MyItem/MyItem';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shareable/Footer/Footer';
import Header from './pages/Shareable/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='myItem' element={<MyItem></MyItem>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
