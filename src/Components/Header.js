import React from 'react';

import {SiteContext} from '../Context/Site';

import {Navbar,Alignment} from '@blueprintjs/core';

class Header extends React.Component {

  // Must be called contextType
  static contextType = SiteContext;

  // then, you can use this.context ...
  render() {
    return (
      <header>
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>{this.context.title}</Navbar.Heading>
          </Navbar.Group>
        </Navbar>
      </header>
    );
  }

}

export default Header;
