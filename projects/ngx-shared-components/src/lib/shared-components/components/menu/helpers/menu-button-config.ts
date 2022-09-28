import { getPropMap, IStyleConfig } from '../../../utilities';

export interface IMenuButtonConfig {
  classes?: { [key: string]: boolean };
  styles?: IStyleConfig;
}

export function getUpdateProps(
  menuButtonConfig: IMenuButtonConfig
): Record<string, string> {
  if (!menuButtonConfig.styles) return {};

  return getPropMap('menu-button', menuButtonConfig.styles);
}
