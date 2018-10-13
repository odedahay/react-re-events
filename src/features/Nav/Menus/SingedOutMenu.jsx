import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const SingedOutMenu = ({ singIn}) => {
  return <Menu.Item position="right">
      <Button onClick={singIn} basic inverted content="Login" />
      <Button basic inverted content="Register" style={{ marginLeft: "0.5em" }} />
    </Menu.Item>;
}

export default SingedOutMenu
