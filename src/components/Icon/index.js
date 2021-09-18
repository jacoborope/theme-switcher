import styled from 'styled-components'

export const Icon = styled.img`
  ${props =>
    props.sm &&
    `   height: 18px;
  `}
  ${props =>
    props.md &&
    `   height: 24px;
  `}
  ${props =>
    props.lg &&
    `   height: 36px;
  `}
  cursor: pointer
`

Icon.defaultProps = {
  md: true,
}
