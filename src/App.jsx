import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { NavLink, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Products from "./components/Products";
import Users from "./components/Users";

function App() {

  
  return (
    <div className="bg-[#212121] h-auto min-h-screen pb-3 text-white">
      <nav className="flex border-gray-500 border-2 max-w-screen-lg mx-auto py-3 justify-end gap-8 px-6 text-lg ">
        
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/about"> About </NavLink>
        <NavLink to="/contact"> Contact </NavLink>
        <NavLink to="/products"> Products </NavLink>
        <NavLink to="/users"> Users </NavLink>
        <NavLink to="/counter"> Counter </NavLink>
        
      </nav>

      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/counter" element={<Counter/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
      </Routes>
    </div>
  )
}

export default App