import React, { useState, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color='light' light expand='md'>
      <NavbarBrand href='/'>
        <b>
          <span className='m-4'>MasterClass</span>
        </b>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <NavLink href='/courses'>Course Catalog</NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              My Profile
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

// NavbarComponent = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   authInfoFromState: state.auth,
// });
export default NavbarComponent;
