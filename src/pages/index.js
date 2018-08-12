import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Layout from '../components/layout'
import Header from '../components/header'
import SmartLink from '../components/smart-link'
import Section from '../components/section'
import globals from '../utils/globals'

import headshot from '../images/jacob-hummel.jpg'
import SkillList from '../components/skill-list'

import IconJavascript from 'devicon-2.2/icons/javascript/javascript-plain.svg'
import IconTypescript from 'devicon-2.2/icons/typescript/typescript-plain.svg'
import IconJava from 'devicon-2.2/icons/java/java-original.svg'
import IconHtml5 from 'devicon-2.2/icons/html5/html5-plain.svg'
import IconCss3 from 'devicon-2.2/icons/css3/css3-plain.svg'
import IconSass from 'devicon-2.2/icons/sass/sass-original.svg'
import IconPowerShell from '../images/skills/powershell.png'

import IconReact from 'devicon-2.2/icons/react/react-original.svg'
import IconAndroid from 'devicon-2.2/icons/android/android-plain.svg'
import IconWordpress from 'devicon-2.2/icons/wordpress/wordpress-plain.svg'
import IconSharepoint from '../images/skills/sharepoint.svg'
import IconOffice365 from '../images/skills/office365.svg'
import IconAzure from '../images/skills/azure.png'
import IconMysql from 'devicon-2.2/icons/mysql/mysql-original.svg'

import IconGit from 'devicon-2.2/icons/git/git-plain.svg'
import IconGulp from 'devicon-2.2/icons/gulp/gulp-plain.svg'
// import IconYeoman from 'devicon-2.2/icons/yeoman/yeoman-plain.svg'
import IconGithub from 'devicon-2.2/icons/github/github-original.svg'
import IconGrunt from 'devicon-2.2/icons/grunt/grunt-original.svg'

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

const languages = [
  {
    name: 'JavaScript (ES6)',
    icon: IconJavascript
  },
  {
    name: 'TypeScript',
    icon: IconTypescript
  },
  {
    name: 'HTML5',
    icon: IconHtml5
  },
  {
    name: 'CSS3',
    icon: IconCss3
  },
  {
    name: 'Sass',
    icon: IconSass
  },
  {
    name: 'Java',
    icon: IconJava
  },
  {
    name: 'PowerShell',
    icon: IconPowerShell
  }
]

const frameworksAndLibs = [
  {
    name: 'React',
    icon: IconReact
  },
  {
    name: 'React Native',
    icon: IconReact
  },
  {
    name: 'SharePoint',
    icon: IconSharepoint
  },
  {
    name: 'Office 365',
    icon: IconOffice365
  },
  {
    name: 'Azure',
    icon: IconAzure
  },
  {
    name: 'Android',
    icon: IconAndroid
  },
  {
    name: 'Wordpress',
    icon: IconWordpress
  },
  {
    name: 'Jekyll',
    icon: IconReact
  },
  {
    name: 'GatsbyJS',
    icon: IconReact
  }
]

const toolsAndProcesses = [
  {
    name: 'React',
    icon: IconReact
  },
  {
    name: 'React Native',
    icon: IconReact
  },
  {
    name: 'React Native',
    icon: IconReact
  },
  {
    name: 'React Native',
    icon: IconReact
  },
  {
    name: 'React Native',
    icon: IconReact
  }
]

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
      <SkillList title='Technologies' skills={frameworksAndLibs} />
      <SkillList title='Processes' skills={toolsAndProcesses} />
    </Section>
    <Section title='Experience'>
      <h4>Work</h4>
      <h4>School</h4>
    </Section>
  </Layout>
)

export default IndexPage
