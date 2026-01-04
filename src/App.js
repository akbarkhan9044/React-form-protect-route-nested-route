import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Form from './page/form/page';
import Dashboard from './page/dashboard/Dashboard';
import Test from './component/Test';
import TestOne from './component/TestOne';
import Protect from './component/Protect';
import Admin from './page/admin/page';
import Home from './page/home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
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
