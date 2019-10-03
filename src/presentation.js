// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Heading
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import {
  IntroSlide,
  WebGLSlide,
  CanvasSlide,
  ExamplesSlide,
  ThreeSlide,
  ThreeCodeSlide,
  NoiseSlide,
  ShaderSlide,
  NoiseDemoSlide,
  MIDISlide,
  WebMidiSlide,
  MIDIDemoSlide,
  ResourceSlide
} from './presentation/';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#815ba4',
    tertiary: '#08b6ef',
    quaternary: '#48b684',
    dark: '#2f1e2e'
  },
  {
    primary: 'Fantasque Sans Mono',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        controls={false}
        contentWidth={1200}
        progress='number'
        showFullscreenControl={false}
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <IntroSlide transition={['fade']} bgColor="primary" />
        <WebGLSlide transition={['slide']} bgColor="primary" />
        <ExamplesSlide transition={['slide']} bgColor="primary" />
        <CanvasSlide transition={['slide']} bgColor="primary" />
        <ThreeSlide transition={['slide']} bgColor="primary" />
        <ThreeCodeSlide transition={['fade']} bgColor="primary" />
        <NoiseSlide transition={['slide']} bgColor="primary" />
        <ShaderSlide transition={['slide']} bgColor="primary" />
        <NoiseDemoSlide transition={['slide']} bgColor="primary" />
        <MIDISlide transition={['slide']} bgColor="primary" />
        <WebMidiSlide transition={['slide']} bgColor="primary" />
        <MIDIDemoSlide transition={['slide']} bgColor="primary" />
        <ResourceSlide transition={['slide']} bgColor="primary" />
        <Slide transition={['slide']} bgColor="primary">
          <Heading textColor='secondary'>
            Thanks!
            <span aria-label="Bye" role="img">👋</span>
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
