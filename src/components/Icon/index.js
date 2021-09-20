import styled from 'styled-components'

const Icon = styled.img`
  ${props =>
    props.xs &&
    `   height: 12px !important;
  `}
  ${props =>
    props.sm &&
    `   height: 18px !important;
  `}
  ${props =>
    props.md &&
    `   height: 24px;
  `}
  ${props =>
    props.lg &&
    `   height: 36px !important;
  `}
  cursor: pointer;
  margin: 0px 6px;
`

Icon.defaultProps = {
  md: true,
}

export default Icon
