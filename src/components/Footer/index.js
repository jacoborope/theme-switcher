import React from 'react'
import styled from 'styled-components'

const Wrap = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  .copyright {
    display: flex;
    justify-content: center;
    padding: 0.5rem 1.5rem;
    p {
      font-size: 12px;
      font-weight: 200;
      ${props =>
        ` color: ${props.theme.colors.secondary};
      `}
    }
  }
`

const Footer = () => {
  return (
    <Wrap>
      <div className="copyright">
        <p>Made with Gatsby & styled-components &copy; Jacobo Romero Pérez</p>
      </div>
    </Wrap>
  )
}

export default Footer
