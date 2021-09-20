import React from 'react'
import Toggle from '../Toggle'
import styled from 'styled-components'

const Wrap = styled.header`
  display: flex;
  justify-content: right;
  padding: 1.25rem 1.5rem;
`

const Header = ({ theme, toggle }) => {
  return (
    <Wrap>
      <Toggle theme={theme} toggleTheme={toggle} />
    </Wrap>
  )
}

export default Header
