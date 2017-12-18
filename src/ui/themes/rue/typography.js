/**
 * What's going on here?
 *
 * If you check out the styleguide's typography section (http://ux.ruelala.com/#g=1&p=typography)
 * you'll notice we have predefined styles for a variety of textual elements. These styles
 * range from DOM element specifics (such as H1, H2, etc.) to more situational body text styles.
 *
 * We reference these typography styles throughout the styleguide to define things like how
 * buttons should look on mobile vs. desktop. By creating a "themed" definition of what those
 * typography styles are, we can apply the same standardized CSS to various locations without
 * having to repeat ourselves.
 *
 * Example usage:
 *
 * const Button = styled('button')`
 *   ${props => props.theme.H3}
 *
 *   @media (min-width: 980px) {
 *     ${props => props.theme.BODY_1_SEMIBOLD}
 *   }
 * `
 *
 * In the above example, all <Button> Components will have the same typography styles as an H3
 * DOM element on mobile, but will then match the `BODY_1_SEMIBOLD` text style on desktop.
 */
export default {
  HEADING: `
    font-size: 20px;
    font-weight: 300;
  `,
  H1: `
    font-size: 18px;
    font-weight: 600;
  `,
  H2: `
    font-size: 18px;
    font-weight: 300;
  `,
  H3: `
    font-size: 16px;
    font-weight: 600;
  `,
  H4: `
    font-size: 16px;
    font-weight: 400;
  `,
  H5: `
    font-size: 16px;
    font-weight: 300;
  `,
  H6: `
    font-size: 14px;
    font-weight: 700;
  `,
  BODY_1_BOLD: `
    font-weight: 700;
    font-size: 14px;
  `,
  BODY_1_SEMIBOLD: `
    font-weight: 600;
    font-size: 14px;
  `,
  BODY_1_NORMAL: `
    font-weight: 400;
    font-size: 14px;
  `,
  BODY_1_LIGHT: `
    font-weight: 300;
    font-size: 14px;
  `,
  SMALL_NORMAL: `
    font-weight: 400;
    font-size: 12px;
  `,
}
