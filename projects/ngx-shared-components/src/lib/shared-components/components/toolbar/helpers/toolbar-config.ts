import { getPropMap, IStyleConfig } from '../../../utilities';

export interface IToolbarConfig {
  classes?: { [key: string]: boolean };
  styles?: IStyleConfig;
}

export function getUpdateProps(config: IToolbarConfig): Record<string, string> {

  if (!config.styles) return {};

  return getPropMap('toolbar', config.styles);


}
