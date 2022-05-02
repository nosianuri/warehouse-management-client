import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllItem from './pages/AllItem/AllItem';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home/Home';
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
        <Route path='/item' element={<AllItem></AllItem>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
