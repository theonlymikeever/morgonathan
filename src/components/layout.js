import React from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import NavBar from '../components/navbar';

const title = `Morgan${window.innerWidth < 768 ? '\n' : ' '}Emmett${
  window.innerWidth < 768 ? '\n' : ' '
}Balog`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <React.Fragment>
          <h1
            style={{
              textAlign: 'center',
              marginBottom: rhythm(0.75),
              marginTop: 0,
              textDecoration: 'none',
              whiteSpace: 'pre-wrap',
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              {title}
            </Link>
          </h1>
          <NavBar />
          <img
            style={{
              width: '700px',
              margin: '0 auto',
              maxWidth: '100%',
              display: 'block',
            }}
            src="/images/portait1-fullres.png"
          />
        </React.Fragment>
      );
    } else {
      header = (
        <React.Fragment>
          <img
            style={{
              width: '700px',
              margin: '0 auto',
              maxWidth: '100%',
              display: 'block',
            }}
            src="/images/portait3-fullres.png"
          />
          <h3
            style={{
              marginTop: rhythm(.5),
              marginBottom: rhythm(-1),
              color: '#a90505',
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              Morgan Emmett Balog
            </Link>
          </h3>
        </React.Fragment>
      );
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(25),
          padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
    );
  }
}

export default Template;
