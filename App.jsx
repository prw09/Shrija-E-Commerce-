import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";




import {
  Routes,
  Route,
  Navigate
  
} from "react-router-dom";



const App = () => {
   
  
  return (
      
      <>
       <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/products">
          <Route index element={<ProductList/>}/>
          <Route path=":categories" element={<ProductList/>}/>
        </Route>
        <Route path="/product">
          <Route index element={<Product/>}/>
          <Route path=":id" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/Login" element={<Navigate replace to="/" />} />
        <Route path="/Register" element={<Navigate replace to="/" />} />
       </Routes>
      </>
      
  )
};


export default App;

 