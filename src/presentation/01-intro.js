import React from 'react';
import { FaTwitter, FaGithub, FaInternetExplorer } from 'react-icons/fa';

import {
  Slide,
  Heading,
  Link,
  S
} from 'spectacle';

export default class Intro extends React.Component {
  render() {
    return (
      <Slide {...this.props}>
        <Heading
          margin="0 auto 1em"
          textColor="secondary"
        >
          Generative Art with WebGL
        </Heading>
        <div>
          <Link textColor="tertiary" href="https://twitter.com/thatdarnpat">
            <FaTwitter /> <S type="underline">@thatdarnpat</S>
          </Link>
        </div>
        <div>
          <Link textColor="dark" href="https://github.com/tlindsay">
            <FaGithub /> <S type="underline">@tlindsay</S>
          </Link>
        </div>
        <div>
          <Link textColor="tertiary" href="https://twitter.com/thatdarnpat">
            <FaInternetExplorer /> <S type="underline">thatdarnpat.com</S>
          </Link>
        </div>
      </Slide>
    )
  }
}
