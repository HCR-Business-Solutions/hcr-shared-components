import { getPropMap, IStyleConfig } from '../../../utilities';

export interface IMenuDropdownConfig {
  classes?: { [key: string]: boolean };
  styles?: IStyleConfig;
}

export function getUpdateProps(
  menuDropdownConfig: IMenuDropdownConfig
): Record<string, string> {
  if (!menuDropdownConfig.styles) return {};

  return getPropMap('menu-dropdown', menuDropdownConfig.styles);
}
