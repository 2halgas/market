import React from "react";
import {NavLink as RouterLink} from "react-router-dom";
import {
  Container, DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";

const Toolbar = props => {
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand tag={RouterLink} to="/" exact>
          Market
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={RouterLink} to="/" exact>Products</NavLink>
          </NavItem>
          {
            props.user ?
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Hello, {props.user.username}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={RouterLink} to="/products/new" exact>
                    Add new product
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={props.logout}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              :
              <>
                <NavItem>
                  <NavLink tag={RouterLink} to="/sign-up" exact>Sign up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RouterLink} to="/sign-in" exact>Sign in</NavLink>
                </NavItem>
              </>
          }
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Toolbar;