import { HSLA } from './hsla';

export interface IBaseStyleOverride {
  width: string; // --<component><?--{state}>--width
  height: string; // --<component><?--{state}>--height

  padding: string; // --<component><?--{state}>--padding
  margin: string; // --<component><?--{state}>--margin

  background: string | HSLA; // --<component><?--{state}>--background
  color: string | HSLA; // --<component><?--{state}>--color

  border: string; // --<component><?--{state}>--border
  borderRadius: string; // --<component><?--{state}>--border-radius

  boxShadow: string; // --<component><?--{state}>--box-shadow
}

export function getSuffixPropMap(
  styleOverride: Partial<IBaseStyleOverride>,
  prefix?: string
): Record<string, string> {
  const record: Record<string, string> = {};

  Object.entries(styleOverride).forEach(
    ([key, value]: [string, string | HSLA]) => {
      if (value !== null && value !== undefined) {
        const cssProp = key
          .replace(/\.?([A-Z])/g, (x, y) => `-${y.toLowerCase()}`)
          .replace(/^\-/, '');
        record[`${prefix ?? ''}--${cssProp}`] =
          typeof value === 'string' ? value : value.prop;
      }
    }
  );

  return record;
}
