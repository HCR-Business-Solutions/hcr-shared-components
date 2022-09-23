//exported interace HSLA
// has the properties necessary to create a HSLA color
export interface HSLA {
  h: number;
  s: number;
  l: number;
  a: number;
}

/**
 * function: normalizeHSLAFormat
 *
 * @param colorStr - a string that represents a HSLA color or HSL color
 *
 * @returns a hsla string
 *
 * @description helper function to normalize the format of a HSLA color string
 * Examples:
 * hsla(245, 23%, 80%, .9) => hsla(245, 23%, 80%, 0.9)
 * hsla(245, 23, 80, 0.9) => hsla(245, 23%, 80%, 0.9)
 * hsla(245, 23%, 80% / 0.9) => hsla(245, 23%, 80%, 0.9)
 * hsl(245, 23%, 80%) => hsla(245, 23%, 80%, 1)
 *
 */
export function normalizeHSLAFormat(colorStr: string): string | null {
  enum ColorFormat {
    HSLA = 'hsla',
    HSL = 'hsl',
  }

  // check if the colorStr is a valid HSLA or HSL color
  if (
    !colorStr.startsWith(ColorFormat.HSLA) &&
    !colorStr.startsWith(ColorFormat.HSL)
  ) {
    return null;
  }

  // helper function to normalize the format of a HSLA color string
  const normalizeHSLA = (hsla: string): string => {
    const [h, s, l, a] = hsla
      .replace(/hsla?\(|\)|\s|%|\//g, '')
      .split(',')
      .map((n) => Number(n));

    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
  };

  // helper function to normalize the format of a HSL color string
  const normalizeHSL = (hsl: string): string => {
    const [h, s, l] = hsl
      .replace(/hsla?\(|\)|\s|%|\//g, '')
      .split(',')
      .map((n) => Number(n));

    return `hsla(${h}, ${s}%, ${l}%, 1)`;
  };

  // check if the colorStr is a HSLA color
  if (colorStr.includes(ColorFormat.HSLA)) {
    return normalizeHSLA(colorStr);
  }

  // check if the colorStr is a HSL color
  if (colorStr.includes(ColorFormat.HSL)) {
    return normalizeHSL(colorStr);
  }

  return null;
}

/**
 * function: toHSLAObj
 *
 * @param colorStr - a string that represents a HSLA color or HSL color
 *
 * @returns an HSLA object
 *
 * @description helper function to convert a HSLA color string to an HSLA object
 * takes an HSLA color string and returns an HSLA object or null if the colorStr is not a valid HSLA color
 * passes the colorStr to normalizeHSLAFormat to normalize the format of the colorStr
 *
 **/
export function toHSLAObj(colorStr: string): HSLA | null {
  const normalizedColorStr = normalizeHSLAFormat(colorStr);

  if (!normalizedColorStr) {
    return null;
  }

  const [h, s, l, a] = normalizedColorStr
    .replace(/hsla?\(|\)|\s|%|\//g, '')
    .split(',')
    .map((n) => Number(n));

  return { h, s, l, a };
}

/**
 * function: toHSLAString
 *
 * @param colorObj - an HSLA object
 *
 * @returns a HSLA color string
 *
 * @description helper function to convert an HSLA object to a HSLA color string
 **/
export function toHSLAString(colorObj: HSLA): string {
  return `hsla(${colorObj.h}, ${colorObj.s}%, ${colorObj.l}%, ${colorObj.a})`;
}

/**
 * function: darkenColor
 *
 * @param colorStr - a string that represents a HSLA color or HSL color
 * @param amount - a number between 0 and 1
 *
 * @returns a HSLA color string or null if the colorStr is not a valid HSLA color
 *
 * @description helper function to darken a HSLA color string
 * takes a HSLA color string and a percent and returns a darker HSLA color string
 * passes the colorStr to normalizeHSLAFormat to normalize the format of the colorStr
 * passes the colorStr to toHSLAObj to convert the colorStr to an HSLA object
 * darkens the HSLA object by the percent
 * passes the HSLA object to toHSLAString to convert the HSLA object to a HSLA color string
 *
 **/
export function darken(colorStr: string, amount: number): string | null {
  const normalizedColorStr = normalizeHSLAFormat(colorStr);

  if (!normalizedColorStr) {
    return null;
  }

  const colorObj = toHSLAObj(normalizedColorStr);

  if (!colorObj) {
    return null;
  }

  const { h, s, l, a } = colorObj;

  // darken the l value by the amount scaled to 100
  const newL = l - amount * 100;

  return toHSLAString({ h, s, l: newL, a });
}

/**
 * function: lighten
 *
 * @param colorStr - a string that represents a HSLA color or HSL color
 * @param amount - a number between 0 and 1
 *
 * @returns a HSLA color string or null if the colorStr is not a valid HSLA color
 *
 * @description helper function to lighten a HSLA color string
 * takes a HSLA color string and a percent and returns a lighter HSLA color string
 * passes the colorStr to normalizeHSLAFormat to normalize the format of the colorStr
 * passes the colorStr to toHSLAObj to convert the colorStr to an HSLA object
 * lightens the HSLA object by the percent
 * passes the HSLA object to toHSLAString to convert the HSLA object to a HSLA color string
 *
 **/
export function lighten(colorStr: string, percent: number): string | null {
  const normalizedColorStr = normalizeHSLAFormat(colorStr);

  if (!normalizedColorStr) {
    return null;
  }

  const colorObj = toHSLAObj(normalizedColorStr);

  if (!colorObj) {
    return null;
  }

  const { h, s, l, a } = colorObj;

  //lighten the l value by the percent scaled to 100
  const newL = l + percent * 100;

  return toHSLAString({ h, s, l: newL, a });
}

/**
 * function: saturate
 * @param colorStr - a string that represents a HSLA color or HSL color
 * @param amount - a number between 0 and 1
 * @returns a HSLA color string or null if the colorStr is not a valid HSLA color
 * @description helper function to saturate a HSLA color string
 */
export function saturate(colorStr: string, amount: number): string | null {
  const normalizedColorStr = normalizeHSLAFormat(colorStr);

  if (!normalizedColorStr) {
    return null;
  }

  const colorObj = toHSLAObj(normalizedColorStr);

  if (!colorObj) {
    return null;
  }

  const { h, s, l, a } = colorObj;

  // saturate the s value by the amount scaled to 100
  const newS = s + amount * 100;

  return toHSLAString({ h, s: newS, l, a });
}

/**
 * function: desaturate
 * @param colorStr - a string that represents a HSLA color or HSL color
 * @param amount - a number between 0 and 1
 * @returns a HSLA color string or null if the colorStr is not a valid HSLA color
 * @description helper function to desaturate a HSLA color string
 */
export function desaturate(colorStr: string, amount: number): string | null {
  const normalizedColorStr = normalizeHSLAFormat(colorStr);

  if (!normalizedColorStr) {
    return null;
  }

  const colorObj = toHSLAObj(normalizedColorStr);

  if (!colorObj) {
    return null;
  }

  const { h, s, l, a } = colorObj;

  // desaturate the s value by the amount scaled to 100
  const newS = s - amount * 100;

  return toHSLAString({ h, s: newS, l, a });
}

/**
 * function: setHue
 * @param colorStr - a string that represents a HSLA color or HSL color
 * @param newHue - a number between 0 and 360
 * @returns a HSLA color string or null if the colorStr is not a valid HSLA color
 * @description helper function to set the hue of a HSLA color string
 */
export function setHue(colorStr: string, newHue: number): string | null {
  const normalizedColorStr = normalizeHSLAFormat(colorStr);

  if (!normalizedColorStr) {
    return null;
  }

  const colorObj = toHSLAObj(normalizedColorStr);

  if (!colorObj) {
    return null;
  }

  const { h, s, l, a } = colorObj;

  return toHSLAString({ h: newHue, s, l, a });
}

/**
 * function: setAlpha
 * @param colorStr - a string that represents a HSLA color or HSL color
 * @param newAlpha - a number between 0 and 1
 * @returns a HSLA color string or null if the colorStr is not a valid HSLA color
 * @description helper function to set the alpha of a HSLA color string
 */
export function setAlpha(colorStr: string, newAlpha: number): string | null {
  const normalizedColorStr = normalizeHSLAFormat(colorStr);

  if (!normalizedColorStr) {
    return null;
  }

  const colorObj = toHSLAObj(normalizedColorStr);

  if (!colorObj) {
    return null;
  }

  const { h, s, l, a } = colorObj;

  return toHSLAString({ h, s, l, a: newAlpha });
}

/**
 * function: isLight
 * @param colorStr - a string that represents a HSLA color or HSL color
 * @returns a boolean
 * @description helper function to check if a HSLA color string is light
 * takes a HSLA color string and returns a boolean
 * passes the colorStr to normalizeHSLAFormat to normalize the format of the colorStr
 * passes the colorStr to toHSLAObj to convert the colorStr to an HSLA object
 * checks if the lightness of the HSLA object is greater than or equal 50
 * returns true if the lightness is greater than or equal to 50, false otherwise
 */
export function isLight(colorStr: string): boolean {
  const normalizedColorStr = normalizeHSLAFormat(colorStr);

  if (!normalizedColorStr) {
    return false;
  }

  const colorObj = toHSLAObj(normalizedColorStr);

  if (!colorObj) {
    return false;
  }

  return colorObj.l >= 40;
}

/**
 * function: isDark
 * @param colorStr - a string that represents a HSLA color or HSL color
 * @returns a boolean
 * @description helper function to check if a HSLA color string is dark
 * takes a HSLA color string and returns a boolean
 * passes the colorStr to normalizeHSLAFormat to normalize the format of the colorStr
 * passes the colorStr to toHSLAObj to convert the colorStr to an HSLA object
 * checks if the lightness of the HSLA object is less than 50
 * returns true if the lightness is less than 50, false otherwise
 */
export function isDark(colorStr: string): boolean {
  const normalizedColorStr = normalizeHSLAFormat(colorStr);

  if (!normalizedColorStr) {
    return false;
  }

  const colorObj = toHSLAObj(normalizedColorStr);

  if (!colorObj) {
    return false;
  }

  return colorObj.l < 40;
}

/**
 * function: getContrastRatio
 *
 * @param foregroundColorStr - a string that represents a HSLA color or HSL color
 * @param backgroundColorStr - a string that represents a HSLA color or HSL color
 *
 * @returns a number that represents the contrast ratio between the foreground color and the background color
 *
 * @description helper function to get the contrast ratio between two HSLA colors
 * takes two HSLA color strings and returns a number that represents the contrast ratio between the foreground color and the background color
 * normalizes the format of the foregroundColorStr and backgroundColorStr
 **/
export function getContrastRatio(
  foregroundColorStr: string,
  backgroundColorStr: string
): number {
  const normalizedForegroundColorStr = normalizeHSLAFormat(foregroundColorStr);
  const normalizedBackgroundColorStr = normalizeHSLAFormat(backgroundColorStr);

  if (!normalizedForegroundColorStr || !normalizedBackgroundColorStr) {
    return 0;
  }

  const foregroundColorObj = toHSLAObj(normalizedForegroundColorStr);
  const backgroundColorObj = toHSLAObj(normalizedBackgroundColorStr);

  if (!foregroundColorObj || !backgroundColorObj) {
    return 0;
  }

  const { l: foregroundLuminance } = foregroundColorObj;
  const { l: backgroundLuminance } = backgroundColorObj;

  const lighterLuminance = Math.max(foregroundLuminance, backgroundLuminance);
  const darkerLuminance = Math.min(foregroundLuminance, backgroundLuminance);

  return (lighterLuminance + 0.05) / (darkerLuminance + 0.05);
}

/**
 * function: checkAccesibility
 *
 * @param foregroundColorStr - a string that represents a HSLA color or HSL color
 * @param backgroundColorStr - a string that represents a HSLA color or HSL color
 * @param guidelines: 'AA' | 'AAA' - a string that represents the accessibility guidelines
 *
 * @returns a boolean that represents if the foreground color meets the accessibility guidelines
 *
 */
export function checkAccessibility(
  foregroundColorStr: string,
  backgroundColorStr: string,
  guidelines: 'AA' | 'AAA' = 'AA'
): boolean {
  const contrastRatio = getContrastRatio(
    foregroundColorStr,
    backgroundColorStr
  );

  if (guidelines === 'AA') {
    return contrastRatio >= 4.5;
  }

  return contrastRatio >= 7;
}

/**
 * FUNCTION: getAccessibleColor
 *
 * @param backgroundColorStr - a string that represents a HSLA color or HSL color
 * @param guidelines: 'AA' | 'AAA' - a string that represents the accessibility guidelines
 *
 * @optional @param foregroundColorStr - a string that represents a HSLA color or HSL color
 *
 * @returns a HSLA color string that meets the accessibility guidelines or null if the backgroundColorStr is not a valid HSLA color
 * @description helper function to get an accessible color
 */
export function getAccessibleColor(
  backgroundColorStr: string,
  guidelines: 'AA' | 'AAA' = 'AA',
  foregroundColorStr?: string
): string | null {
  // normalize the format of the backgroundColorStr if not valid return null
  const normalizedBackgroundColorStr = normalizeHSLAFormat(backgroundColorStr);
  if (!normalizedBackgroundColorStr) return null;

  // get the HSLA object of the normalized backgroundColorStr if not valid return null
  const backgroundColorObj = toHSLAObj(normalizedBackgroundColorStr);
  if (!backgroundColorObj) return null;

  // check if the backgroundColor is light or dark
  const isBackgroundColorLight = isLight(normalizedBackgroundColorStr);

  // if the foregroundColorStr is null set it to the normalized backgroundColorStr
  if (!foregroundColorStr) {
    foregroundColorStr = normalizedBackgroundColorStr;
  }

  // if the forgroundColor meets the accessibility guidelines return the foregroundColorStr
  if (checkAccessibility(foregroundColorStr, backgroundColorStr, guidelines)) {
    return foregroundColorStr;
  }

  // attempt to lighten or darken the foreground color to meet the accessibility guidelines
  let accessibleColor = isBackgroundColorLight
    ? darken(foregroundColorStr, 0.1)
    : lighten(foregroundColorStr, 0.1);

  if (!accessibleColor) return null;

  // check if the accessibleColor did not change or if it meets the accessibility guidelines and reutrn the accessibleColor if it does
  if (
    accessibleColor !== foregroundColorStr &&
    checkAccessibility(accessibleColor, backgroundColorStr, guidelines)
  ) {
    return accessibleColor;
  }

  //recursive call to getAccessibleColor
  return getAccessibleColor(backgroundColorStr, guidelines, accessibleColor);
}
