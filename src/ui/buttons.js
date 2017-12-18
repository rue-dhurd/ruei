import styled, { css } from 'react-emotion'

const primaryButton = props => css`
  background: ${props.theme.PRIMARY_1};
  color: ${props.theme.NEUTRAL_1};

  &:hover {
    background: ${props.theme.PRIMARY_2};
  }
`

const secondaryButton = props => css`
  background: ${props.theme.NEUTRAL_8};
  color: ${props.theme.NEUTRAL_1};

  &:hover {
    background: ${props.theme.NEUTRAL_7};
  }
`

const standardButton = props => css`
  background: ${props.theme.NEUTRAL_3};
  color: ${props.theme.NEUTRAL_7};

  &:hover {
    background: ${props.theme.NEUTRAL_4};
  }
`

const Button = styled('button')`
  ${props => props.theme.BODY_1_SEMIBOLD}
  ${props =>
    props.primary
      ? primaryButton
      : props.secondary ? secondaryButton : standardButton};

  height: 36px;
  line-height: 36px;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  padding: 0 24px;
  cursor: pointer;

  &:disabled {
    background: ${props => props.theme.NEUTRAL_2};
    color: ${props => props.theme.NEUTRAL_4};
    cursor: default;
  }
`

export { Button }
