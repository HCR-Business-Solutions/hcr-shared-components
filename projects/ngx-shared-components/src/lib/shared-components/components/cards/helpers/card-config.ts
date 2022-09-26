import { getPropMap, IStyleConfig } from '../../../utilities';

export interface ICardConfig {
  classes?: { [key: string]: boolean };
  styles?: IStyleConfig;
}

export function getUpdateProps(cardConfig: ICardConfig): Record<string, string> {

  if (!cardConfig.styles) return {};

  return getPropMap('card', cardConfig.styles);


}
