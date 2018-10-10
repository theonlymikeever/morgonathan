import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Helmet from 'react-helmet'

const description = 'Get in contact with Morgan Balog. Whether you want to reach out to collaborate or just say hi, this is easy to click email button.'

const Contact = props => (
  <Layout location={props.location}>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: description }]}
      title={`Contact Me | Morgan Balog`}
    />
    <h1>Contact Me</h1>
    <h3>I'd love to talk! Well, just maybe.</h3>
    <p>
      Getting in touch with me is pretty easy in the tech dominated world. You may email me here: <a href="mailto:mbalog89@gmail.com">mbalog89@gmail.com</a>, or through one of the platforms I've reluctantly signed up for below.
    </p>
    <Link to="/" rel="home">
      ← Back
    </Link>
  </Layout>
);

export default Contact;
