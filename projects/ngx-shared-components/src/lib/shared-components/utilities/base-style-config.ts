import { getSuffixPropMap, IBaseStyleOverride } from "./base-style-override";

export interface IStyleConfig {

  default: Partial<IBaseStyleOverride>;

  states?: {
    [key: string]: Partial<IBaseStyleOverride>;
  }

};

export function getPropMap(componentName: string, styleConfig: IStyleConfig): Record<string, string> {

  return getStatePropMap(styleConfig, `--${componentName}`);

}

export function getStatePropMap(styleConfig: IStyleConfig, prefix?: string): Record<string, string> {

  const defaultMap: Record<string, string> = getSuffixPropMap(styleConfig.default, prefix);
  const statesMap: Record<string, Record<string, string>> = {};

  if (styleConfig.states) {
    Object.entries(styleConfig.states).forEach(([stateKey, config]: [string, Partial<IBaseStyleOverride>]) => {
      statesMap[stateKey] = getSuffixPropMap(config, `${prefix}--${stateKey}`)
    })
  }

  const flatSates: Record<string, string> = statesMap ?
    Object.values(statesMap).reduce((prev, curr) => ({...prev, ...curr}) ,{})
  : {};

  return {
    ...defaultMap,
    ...flatSates,
  };

}
