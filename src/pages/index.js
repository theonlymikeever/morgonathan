import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import Layout from '../components/layout';
import Footer from '../components/footer';
import { rhythm } from '../utils/typography';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <h3>Works</h3>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          );
        })}
        <hr
          style={{
            margin: '25px 0',
            height: '1px',
            background: 'linear-gradient(left, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 10%,rgba(0,0,0,0.65) 50%,rgba(0,0,0,0) 90%,rgba(0,0,0,0) 100%)' // not working!
          }}
        />
        <Bio />
        <Footer />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
