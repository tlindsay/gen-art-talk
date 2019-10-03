import React from 'react';
import {
  Slide,
  Heading,
  CodePane
} from 'spectacle';
import { stripIndent } from 'common-tags'

export default class WebmidiSlide extends React.Component {
  render() {
    let code = stripIndent`
      import * as WebMidi from 'webmidi';

      WebMidi.enable(() => {
        let [myInput] = WebMidi.inputs();

        myInput.addListener('keyDown', ({ note, velocity }) => { /* ... */ });
        myInput.addListener('keyUp', ({ note, velocity }) => { /* ... */ });
        myInput.addListener('pitchBend', ({ value }) => { /* ... */ });
      });
    `;
    return (
      <Slide {...this.props} align="center top">
        <Heading size={2} textSize="2.5em" margin="0 auto 1em">
          WebMidi.js
        </Heading>
        <CodePane
          transition={[]}
          lang="js"
          padding="0 0 0 1em"
          source={code}
          textSize="1em"
          theme="light"
        />
      </Slide>
    )
  }
}
