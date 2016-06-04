'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { IndexLink, Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class HorizontalMenu extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/" title="Daikon v0.0.0 Alpha">Daikon <sup><small>v0.0.0 Alpha</small></sup></IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#"><i className="fa fa-lg fa-home"></i></NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown className="navbar-right" eventKey={4} title="Developers" id="menu-developers">
              <MenuItem eventKey={4.1} href="//github.com/hegdeashwin/daikon" target="_blank">Github Home Page</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.2} href="//github.com/hegdeashwin/daikon/releases" target="_blank">Release Page</MenuItem>
              <MenuItem eventKey={4.3} href="//github.com/hegdeashwin/daikon/milestones" target="_blank">Milestones</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.4} href="//github.com/hegdeashwin/daikon/issues" target="_blank">Report Issues</MenuItem>
              <MenuItem eventKey={4.5} href="//github.com/hegdeashwin/daikon/pulls" target="_blank">Open Pull Requests</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.6} href="//github.com/hegdeashwin/daikon" target="_blank">About Daikon</MenuItem>
            </NavDropdown>
            <NavDropdown className="navbar-right" eventKey={5} title="Help" id="menu-help">
              <MenuItem eventKey={5.1} href="//github.com/hegdeashwin/daikon/wiki" target="_blank">Documentation</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default HorizontalMenu;
