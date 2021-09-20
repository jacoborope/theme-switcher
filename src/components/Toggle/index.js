import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const ThemeSelector = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  ${props =>
    ` background-color: ${props.theme.colors.secondary};
  `}
  border-radius: 50%;
`

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <ThemeSelector
      role="button"
      tabIndex={0}
      onKeyPress={toggleTheme}
      onClick={toggleTheme}
    ></ThemeSelector>
  )
}

Toggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default Toggle
