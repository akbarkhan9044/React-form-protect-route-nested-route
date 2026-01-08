import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Form from './page/form/page';
import Dashboard from './page/dashboard/Dashboard';
import Test from './component/Test';
import TestOne from './component/TestOne';
import Protect from './component/Protect';
import Admin from './page/admin/page';
import Home from './page/home/Home';
import Product from './page/product/Product';
import Products from './page/filter/Product';
import ProductData from './page/productdata/Product';
import Web from './page/webhook/Web';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/fill" element={<Products/>} />
        <Route path="/web" element={<Web/>} />
        <Route path="/prod" element={<ProductData/>} />
        <Route  path="/product" element={<Product/>} />
    <Route path="/admin"
    element={
      <Protect role={["admin","test"]}>

      <Admin/>
    </Protect>
    }
    />
    

        {/* NestedRoute */}
        <Route path="/dashboard" element={<Dashboard/>}>
        <Route path="test" element={<Test/>} />
        <Route  path="testone" element={<TestOne/>} />
        </Route>


        <Route path="/form" element={<Form/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
