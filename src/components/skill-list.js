import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

import SkillIcon from '../components/skill-icon'

const styles = StyleSheet.create({
  skillRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 10,
    marginBottom: 30,
    '@media screen and (min-width: 40em)': {
      gridTemplateColumns: 'repeat(8, 1fr)'
    }
  }
})

const SkillList = ({ title, skills }) => {
  return (
    <div>
      <h4>{title}</h4>
      <div className={css(styles.skillRow)}>
        {skills.map(skill => (
          <SkillIcon key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

SkillList.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired
}

export default SkillList
