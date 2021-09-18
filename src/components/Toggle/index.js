import PropTypes from 'prop-types'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light'
  return isLight ? (
    <StaticImage
      width={24}
      onClick={toggleTheme}
      src="../../images/sun.png"
      alt={'light'}
    />
  ) : (
    <StaticImage
      width={24}
      onClick={toggleTheme}
      src="../../images/moon.png"
      alt={'dark'}
    />
  )
}

Toggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default Toggle
