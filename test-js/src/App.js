import React, { useState } from 'react';
import {
  NavLink,
  Nav,
  NavItem,
} from 'reactstrap';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout';
import MyTest from './components/MyTest';
import Home from './components/Home';
import Mortgage from './components/Mortgage';
import MyCard from './components/MyCard';
import MyFormik from './components/MyFormik';
const App= (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);


  return (
    <Layout>
    <Nav tabs>
      <NavItem>
        <NavLink href="/" >
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/mytest" >Test</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/mortgage" >Mortgage Calculator</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/cards" >Test Cards</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/formik" >Test Formik</NavLink>
      </NavItem>
    </Nav>
    <Routes>
        <Route path="/" element={<Home />}/>        
        <Route path="/mytest" element={<MyTest/>} />
        <Route path="/mortgage" element={<Mortgage />} />
        <Route path="/cards" element={<MyCard/>} />
        <Route path="/formik" element={<MyFormik />} />
    </Routes>
    
    </Layout>
  );
}

export default App;
