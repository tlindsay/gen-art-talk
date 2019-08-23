import React from 'react';
import {
  Slide,
  Heading,
  List,
  ListItem,
  Link
} from 'spectacle';

export default class ResourceSlide extends React.Component {
  render() {
    return (
      <Slide {...this.props} align="center top">
        <Heading size={2} margin="0 auto 1em">Resources</Heading>
        <List>
          <ListItem>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">Canvas Documentation</Link>
          </ListItem>
          <ListItem>
            <Link href="https://threejs.org">THREE.js</Link>
          </ListItem>
          <ListItem>
            <Link href="https://thebookofshaders.com/">The Book of Shaders</Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.mattdesl.com">Matt DesLaurier</Link>
          </ListItem>
        </List>
      </Slide>
    )
  }
}
