import PropTypes from 'prop-types'
import React from 'react'

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light'
  return (
    <span
      role="button"
      tabIndex={0}
      onKeyPress={toggleTheme}
      onClick={toggleTheme}
    >
      {isLight ? 'Light Theme' : 'Dark Theme'}
    </span>
  )
}

Toggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default Toggle
