import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Layout from '../components/layout'
import Header from '../components/header'
import SmartLink from '../components/smart-link'

import headshot from '../images/jacob-hummel.jpg';

const styles = StyleSheet.create({
  targetLink: {
    color: '#333',
    textDecorationColor: '#c00',
  },
  boogieLink: {
    color: '#333',
    textDecorationColor: '#0062FF',
  },
})

const IndexPage = () => (
  <Layout>
    <Header headshot={headshot}>
      I'm <strong>Jacob Hummel</strong>, a
      front-end software engineer at&nbsp;
      <SmartLink href='https://www.target.com/' alt='Target website' className={css(styles.targetLink)}>Target</SmartLink> and
      co-founder at&nbsp;
      <SmartLink href='https://boogie.io' alt='Boogie website' className={css(styles.boogieLink)}>Boogie</SmartLink>.
      I live in Minneapolis, Minnesota.
    </Header>
  </Layout>
)

export default IndexPage
