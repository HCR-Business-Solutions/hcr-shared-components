import { getPropMap, IStyleConfig } from '../../../utilities';

export interface IMenuItemConfig {
  classes?: { [key: string]: boolean };
  styles?: IStyleConfig;
}

export function getUpdateProps(
  menuItemConfig: IMenuItemConfig
): Record<string, string> {
  if (!menuItemConfig.styles) return {};

  return getPropMap('menu-item', menuItemConfig.styles);
}
