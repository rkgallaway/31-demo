import React from 'react';

import SiteContext from './Context/Site.js';
import ThemeContext from './Context/Theme.js';
import Main from './Components//Main.js';

export default class App extends React.Component {
  render() {
    return (
      <ThemeContext>
        <SiteContext>
          <Main />
        </SiteContext>
      </ThemeContext>
    );
  }
}
