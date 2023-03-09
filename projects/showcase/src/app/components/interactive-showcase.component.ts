import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

export type PropertyValue = boolean | string | number | string[];
export type PropertyType = 'boolean' | 'string' | 'date' | 'number' | string[];
export type PropertyInfo = { [key: string]: PropertyType };
export type Properties = { [key: string]: PropertyValue };
export type PropPack = { properties: Properties; info: PropertyInfo };

export type PropertyEdits = { [key: string]: PropPack };

@Component({
  selector: 'app-interactive-showcase',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex flex-col md:flex-row items-center justify-center gap-4">
      <div
        class="min-w-[47%] border border-stone-900 border-opacity-40 rounded-md bg-stone-50 flex flex-col gap-4 py-4"
      >
        <div class="text-xl text-stone-900 px-4">Interactive Properties</div>
        <div class="max-h-[50vh] overflow-auto flex flex-col gap-4 px-2">
          <div
            class="flex flex-col w-full p-4 gap-4 border border-stone-900 border-opacity-30 rounded-sm bg-white"
            *ngFor="let editKey of this.propertyEditKeys"
          >
            <div class=>
              {{ normalizeKey(editKey) }}
            </div>
            <div
              *ngFor="let key of this.propertyKeys(editKey)"
              class="flex gap-2"
              [class.flex-row]="this.getPropertyType(key, editKey) === 'boolean'"
              [class.flex-col]="this.getPropertyType(key, editKey) !== 'boolean'"
            >
              <label
                [class.order-last]="
                  this.getPropertyType(key, editKey) === 'boolean'
                "
                [for]="key"
              >
                {{ normalizeKey(key) }}
              </label>

              <ng-container
                *ngIf="isArray(this.getPropertyType(key, editKey)); else asInput"
              >
                <select
                  class="bg-white py-4 px-2 border border-stone-900 border-opacity-40 rounded-md"
                  [id]="key"
                  [(ngModel)]="this.edits[editKey].properties[key]"
                >
                  <option
                    *ngFor="let opt of getOptions(key, editKey)"
                    [value]="opt"
                  >
                    {{ opt }}
                  </option>
                </select>
              </ng-container>
              <ng-template #asInput>
                <input
                  [id]="key"
                  [(ngModel)]="this.edits[editKey].properties[key]"
                  [type]="this.getInputType(key, editKey)"
                  class="bg-white py-4 px-2 border border-stone-900 border-opacity-40 rounded-md"
                />
              </ng-template>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full md:flex-grow border border-stone-900 border-opacity-40 rounded-md bg-stone-50 flex flex-col gap-4 p-4"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InteractiveShowcaseComponent {
  @Input() edits!: PropertyEdits;
  @Output() editsChange: EventEmitter<PropertyEdits> =
    new EventEmitter<PropertyEdits>();

  isArray = Array.isArray;

  get propertyEditKeys(): string[] {
    return Object.keys(this.edits);
  }

  propertyKeys(targetKey: string): string[] {
    const infoObj = this.edits[targetKey]?.info ?? {};
    return Object.keys(infoObj);
  }

  normalizeKey(key: string): string {
    const result = key.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  getPropertyType(key: string, targetKey: string): string | string[] {
    return this.edits[targetKey]?.info[key] ?? 'text';
  }

  getOptions(key: string, targetKey: string): string[] {
    const infoObj = this.edits[targetKey];
    if (!infoObj) return [];
    const res = infoObj.info[key];
    if (!this.isArray(res)) return [];
    return res;
  }

  getInputType(key: string, targetKey: string): string {
    const infoObj = this.edits[targetKey]?.info ?? {};
    switch (infoObj[key]) {
      case 'boolean':
        return 'checkbox';
      case 'number':
        return 'number';
      case 'date':
        return 'datetime-local';
    }
    return 'text';
  }
}
