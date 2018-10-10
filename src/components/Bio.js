import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from '../../public/images/morgan-avatar2.png'
import { rhythm } from '../utils/typography'

import { InstagramIcon, LinkedInIcon, TwitterIcon } from './Svg';


class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1.5),
          alignItems: 'center'
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(6),
            height: rhythm(6),
            borderRadius: '50%'
          }}
        />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          <p
            style={{
              flex: '2'
            }}
          >
            Morgan lives and works in New Jersey. You can follow him on the various soul-sucking social media platforms, if that's your jam. <br />
          </p>
          <div
            style={{
              width: '100%',
              flex: '0 0 100%'
            }}
          >
            <a
              href="https://twitter.com/MorganBALROG"
              style={{
                margin: '5px'
              }}
            >
              <TwitterIcon height="25" width="25" />
            </a>
            <a
              href="https://www.instagram.com/morganbalrog/"
              style={{
                margin: '5px'
              }}
            >
              <InstagramIcon height="25" width="25" />
            </a>
            <a
              href="https://www.linkedin.com/in/morgan-e-balog-55225558/"
              style={{
                margin: '5px'
              }}
            >
              <LinkedInIcon height="25" width="25" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Bio
