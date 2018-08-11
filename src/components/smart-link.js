import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const SmartLink = ({ children, alt, href, className }) => {
  if (href.startsWith('/')) {
    return (
      <Link
        to={href}
        className={className}
        alt={alt}
      >
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      alt={alt}
      className={className}
    >
      {children}
    </a>
  )
}

SmartLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
}

SmartLink.defaultProps = {
  className: '',
}

export default SmartLink
