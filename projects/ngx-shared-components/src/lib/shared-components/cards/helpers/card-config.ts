import { CardStyles } from './card-styles';

export interface CardConfig {
  classes: { [key: string]: boolean };
  styles: Partial<CardStyles>;
}
