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
    </Nav>
    <Routes>
        <Route path="/" element={<Home />}/>        
        <Route path="/mytest" element={<MyTest/>} />
    </Routes>
    
    </Layout>
  );
}

export default App;
