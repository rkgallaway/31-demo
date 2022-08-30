import React, {useContext} from 'react';

import {SiteContext} from '../Context/Site';

import { Card, Elevation } from '@blueprintjs/core';



function Footer(props) {

  const site = useContext(SiteContext);

  return (
    <footer>

      <Card elevation={Elevation.TWO}>
        <p>&copy; 2021 {site.title}</p>
        Twitter <a href={`http://twitter.com/${site.twitter}`}>@{site.twitter}</a>
      </Card>
    </footer>
  );

}

export default Footer;
