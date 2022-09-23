export interface CardStyles {
  backgroundColor: string; // --card-background-color
  textColor: string; // --card-text-color
  borderColor: string; // --card-border-color
  borderRadius: string; // --card-border-radius
  borderWidth: string; // --card-border-width
  borderStyle: string; // --card-boder-style
  boxShadow: string; // --card-box-shadow
  padding: string; // --card-padding
  margin: string; // --card-margin
}

/**
 *
 * @param update Partial<CardStyles>
 * @returns Record<string, string>
 *
 * @description takes a partial of CardStyles and returns a record of css properties
 * only includes styles that are defined
 *
 */
export function buildUpdateProps(
  update: Partial<CardStyles>
): Record<string, string> {
  const props: Record<string, string> = {};
  if (update.backgroundColor) {
    props['--card-background-color'] = update.backgroundColor;
  }
  if (update.borderColor) {
    props['--card-border-color'] = update.borderColor;
  }
  if (update.borderRadius) {
    props['--card-border-radius'] = update.borderRadius;
  }
  if (update.borderWidth) {
    props['--card-border-width'] = update.borderWidth;
  }
  if (update.borderStyle) {
    props['--card-boder-style'] = update.borderStyle;
  }
  if (update.boxShadow) {
    props['--card-box-shadow'] = update.boxShadow;
  }
  if (update.padding) {
    props['--card-padding'] = update.padding;
  }
  if (update.margin) {
    props['--card-margin'] = update.margin;
  }
  if (update.textColor) {
    props['--card-text-color'] = update.textColor;
  }
  return props;
}
