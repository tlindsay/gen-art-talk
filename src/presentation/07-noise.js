import React from 'react';
import {
  Slide,
  Heading,
  Image,
  List,
  ListItem,
  Layout,
  Fill
} from 'spectacle';

import NoiseMap from '../assets/noise-map.jpg';

export default class NoiseSlide extends React.Component {
  render() {
    return (
      <Slide {...this.props} align="center top">
        <Heading size={2} margin="0 auto 1em">
          Noise Functions
        </Heading>
        <Layout>
          <List>
            <ListItem>"Controlled randomness"</ListItem>
            <ListItem>Perlin/Simplex Noise</ListItem>
            <ListItem>Multidimensional</ListItem>
            <ListItem>Procedural Generation</ListItem>
          </List>
          <Fill>
            <Image
              alt="Terrain generated from noise function"
              src={NoiseMap}
              style={{ padding: "0 1em" }}
            />
          </Fill>
        </Layout>
      </Slide>
    )
  }
}
