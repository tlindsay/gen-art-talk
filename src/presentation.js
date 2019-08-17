// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import {
  IntroSlide,
} from './presentation/';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#815ba4',
    tertiary: '#08b6ef',
    quaternary: '#fec419',
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
        progress='number'
        showFullscreenControl={false}
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <IntroSlide transition={['fade']} bgColor="primary" />
      </Deck>
    );
  }
}
