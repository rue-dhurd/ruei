import styled, { css } from 'react-emotion'

const headingStyle = props => css`
  color: ${props.theme.NEUTRAL_7};
`

const Heading = styled('h1')`
  ${headingStyle}
  ${props => props.theme.HEADING}
`

const H1 = styled('h1')`
  ${headingStyle}
  ${props => props.theme.H1}
`

const H2 = styled('h2')`
  ${headingStyle}
  ${props => props.theme.H2}
`

const H3 = styled('h3')`
  ${headingStyle}
  ${props => props.theme.H3}
`

const H4 = styled('h4')`
  ${headingStyle}
  ${props => props.theme.H4}
`

const H5 = styled('h5')`
  ${headingStyle}
  ${props => props.theme.H5}
`

const H6 = styled('h6')`
  ${headingStyle}
  ${props => props.theme.H6}
`

export { Heading, H1, H2, H3, H4, H5, H6 }
