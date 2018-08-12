import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Layout from '../components/layout'
import Header from '../components/header'
import SmartLink from '../components/smart-link'
import Section from '../components/section'
import globals from '../utils/globals'

import headshot from '../images/jacob-hummel.jpg'
import SkillList from '../components/skill-list'

import { languages, technologies, workflow } from '../data/skills'

const styles = StyleSheet.create({
  targetLink: {
    color: globals.color.text,
    textDecorationColor: globals.color.target
  },
  boogieLink: {
    color: globals.color.text,
    textDecorationColor: globals.color.boogie
  },
  twoCol: {
    display: 'grid',
    gridTemplateColumns: '50% 50%'
  }
})

const IndexPage = () => (
  <Layout>
    <Header headshot={headshot}>
      I'm <strong>Jacob Hummel</strong>, a front-end software engineer at{' '}
      <SmartLink
        href='https://www.target.com/'
        alt='Target website'
        className={css(styles.targetLink)}
      >
        Target
      </SmartLink>{' '}
      and co-founder at{' '}
      <SmartLink
        href='https://boogie.io'
        alt='Boogie website'
        className={css(styles.boogieLink)}
      >
        Boogie
      </SmartLink>
      . I live in Minneapolis, Minnesota.
    </Header>
    <Section title='Skills'>
      <SkillList title='Languages' skills={languages} />
      <SkillList title='Frameworks, Libraries, and Platforms' skills={technologies} />
      <SkillList title='Workflow and Tools' skills={workflow} />
    </Section>
    <Section title='Experience'>
      <h4>Work</h4>
      <h4>School</h4>
    </Section>
  </Layout>
)

export default IndexPage
