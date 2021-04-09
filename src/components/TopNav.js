import { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand,  NavbarToggler, NavItem } from "reactstrap";
import {NavLink} from 'react-router-dom';

function TopNav() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(prev => !prev)
  }
  return(
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/login'>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/register'>Register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  )
}

export default TopNav;

