import React from 'react';
import { IconContext } from 'react-icons';
import { FaTwitter, FaGithub, FaInternetExplorer } from 'react-icons/fa';
import { DiEmber } from 'react-icons/di';
import Narwin from '../assets/DY-Light BG.svg';

import {
  Slide,
  Heading,
  Link,
  S
} from 'spectacle';

export default class IntroSlide extends React.Component {
  render() {
    return (
      <Slide {...this.props}>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <Heading
            margin="0 auto .2em"
            textColor="secondary"
          >
            Generative Art with WebGL
          </Heading>
          <Heading
            margin="0 auto 1em"
            size={6}
          >
            Patrick Lindsay
          </Heading>
          <div style={{ textAlign: 'justify', margin: '0 auto', width: '300px' }}>
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
            <div style={{ marginTop: '1em', textAlign: 'center' }}>
              <Link textColor="dark" href="https://dockyard.com">
                <DiEmber size="60" color="#e04e39" /> @ <img height="30" alt="Narwin" src={Narwin} style={{ verticalAlign: 'middle' }} />
              </Link>
            </div>
          </div>
        </IconContext.Provider>
      </Slide>
    )
  }
}
