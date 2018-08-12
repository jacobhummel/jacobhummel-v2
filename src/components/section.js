import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  section: {
    paddingBottom: '10vh'
  }
})

const Section = ({ children, title }) => {
  return (
    <section className={css(styles.section)}>
      {title && <h2 className={css(styles.title)}>{title}</h2>}
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

Section.defaultProps = {
  title: undefined
}

export default Section
