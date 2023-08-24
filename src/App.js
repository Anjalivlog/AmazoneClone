import "./App.css";
import Header from "./Layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Footer from "./Layout/Footer";
import Login from "./Components/Login";
import ListProducts from "./Components/ListProducts";
import Orders from "./Components/Orders";
import Profile from "./Components/Profile";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={[<Header />, <Home />, <Footer/>]}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/ListProducts" element={[<Header />, <ListProducts />, <Footer/>]}></Route>
            <Route path="/Orders" element={[<Header />, <Orders />, <Footer/>]}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/Cart" element={[<Header />, <Cart />, <Footer />]}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
