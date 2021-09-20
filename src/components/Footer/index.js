import Icon from '../Icon'
import React from 'react'
import { filteredIcons } from '../../utils/icons'
import gatsby from '../../images/gatsby_icon.png'
import github from '../../images/github_icon.png'
import githubLight from '../../images/github_icon_light.png'
import linkedin from '../../images/linkedin_icon.png'
import styled from 'styled-components'

const Wrap = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  .icon-wrapper,
  .copyright {
    display: flex;
    justify-content: center;
    padding: 0.5rem 1.5rem;
    p {
      font-size: 8px;
      font-weight: 200;
      ${props =>
        ` color: ${props.theme.colors.secondary};
      `}
    }
  }
  .gatsby-icon {
    align-self: center;
  }
`

const data = [
  {
    src: github,
    alt: 'github',
  },
  {
    src: githubLight,
    alt: 'github_light',
  },
  {
    src: linkedin,
    alt: 'linkedin',
  },
]

const Footer = () => {
  const icons = data && filteredIcons(data)
  return (
    <Wrap>
      <div className="icon-wrapper">
        {icons &&
          icons.map((i, index) => <Icon key={index} src={i.src} alt={i.alt} />)}
      </div>
      <div className="copyright">
        <p>Made with</p>
        <Icon className="gatsby-icon" xs src={gatsby} alt="gatsby" />
        <p>&copy; Jacobo Romero Pérez</p>
      </div>
    </Wrap>
  )
}

export default Footer
