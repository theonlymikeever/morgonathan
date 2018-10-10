import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Helmet from 'react-helmet'

const description = 'About Morgan Balog, Writer, Artis & Cosmic Slime-Lord. Morgan is a BA Graduate from Ramapo College of New Jersey with over a decade of experience writing engaging fiction, prose and poetry.'

const About = props => (
  <Layout location={props.location}>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: description }]}
      title={`About | Morgan Balog`}
    />
    <h1>About</h1>
    <p>Morgan Emmett Balog was born in the suburbs.</p>

    <p>
      Does it matter where? <em>No, because they’re all the same.</em> He was
      raised on a steady diet of cable TV commercials, high school pep events,
      and black metal. Over the past 8 years, Morgan has funneled 40 hours a
      week of corporate copy writing hell into his first novel,{' '}
      <a href="/against-the-void">Against the Void</a>; a work that is equal
      parts bitter lash and spiritual relief, woven with the quiet sufferings
      and absurdist horrors we call a “lifestyle” in middle class America.
    </p>

    <p>
      By all accounts, he is the soothsayer of a vague, slow-burn existential
      dread known by all suburbanites but only spoken of in hushed tones with
      psychiatrists (or screamed from North Jersey mountain tops through
      attempts of self medication). Morgan’s other work varies drastically, from
      short stories wrought with the awkward charm of the incurably inane, to
      commentaries on the American military industrial complex with the accuracy
      of an AGM-114 hellfire missile.
    </p>

    <p>
      He is a 2011 graduate of{' '}
      <a href="https://www.ramapo.edu/">Ramapo College of New Jersey</a> with a
      BA in Communications Writing, which by my calculations means, pending the
      bliss of sudden tragedy, he should live long enough to experience the
      resource wars that global climate change beckon first-hand. Currently,
      Morgan is participating in the Sackett Street Writers Workshop as he chews
      away on his untitled second novel, because let’s face it formal MFA
      programs are a capitalist construct to gleam a few extra dollars out of
      our wallets.
    </p>

    <p>
      Let Morgan’s work guide you like a disembodied skeletal hand as it reveals
      the rotting core of the places you’ve built your entire life on. The fury
      of a rising talent resides in this man’s soul. Trust him to carry the
      flame of truth and cast out shadows in the mangled forest of ignorance we
      call a global community. He wants to show you that something truly
      beautiful awaits on the other side.
    </p>
    <Link to="/" rel="next">
      ← Back
    </Link>
  </Layout>
);

export default About;
