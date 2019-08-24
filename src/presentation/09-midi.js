import React from 'react';
import {
  Slide,
  Heading,
  Appear,
  BlockQuote,
  Quote,
  Cite,
  List,
  ListItem,
  Link
} from 'spectacle';

export default class MIDISlide extends React.Component {
  render() {
    return (
      <Slide {...this.props} align="center top">
        <Heading size={2}>What is MIDI?</Heading>
        <Appear>
          <BlockQuote>
            <Quote textColor="dark" textSize=".8em">
              MIDI (short for Musical Instrument Digital Interface) is a technical standard that describes a communications protocol, digital interface, and electrical connectors that connect a wide variety of electronic musical instruments, computers, and related audio devices for playing, editing and recording music.
            </Quote>
            <Cite>Wikipedia</Cite>
          </BlockQuote>
        </Appear>
        <List textColor="dark">
          <Appear>
            <ListItem>Standardized data format for electronic musical instruments</ListItem>
          </Appear>
          <Appear>
            <ListItem>Web API is not final</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Only works in Chrome and Opera
              <Link
                href="https://caniuse.com/#feat=mid"
                margin="auto auto auto 1em"
                target="_blank"
                textSize=".5em"
              >
                Can I Use
              </Link>
            </ListItem>
          </Appear>
        </List>
      </Slide>
    )
  }
}
