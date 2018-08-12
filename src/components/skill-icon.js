import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  skill: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    fontSize: 12
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5
  }
})

const SkillIcon = ({ skill }) => {
  console.log(skill)

  return (
    <div className={css(styles.skill)}>
      <img src={skill.icon} className={css(styles.icon)} />
      <div className={css(styles.text)}>{skill.name}</div>
    </div>
  )
}

SkillIcon.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired
  }).isRequired
}

export default SkillIcon
