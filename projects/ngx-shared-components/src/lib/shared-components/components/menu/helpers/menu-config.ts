import { IMenuButtonConfig } from './menu-button-config';
import { IMenuDropdownConfig } from './menu-dropdown-config';
import { IMenuItemConfig } from './menu-item-config';

export interface IMenuConfig {
  menuButtonConfig?: IMenuButtonConfig;
  menuDropdownConfig?: IMenuDropdownConfig;
  menuItemConfig?: IMenuItemConfig;
}
