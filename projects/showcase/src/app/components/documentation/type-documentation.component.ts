import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeProperty, TypePropertyComponent } from './type-property.component';

export interface TypeInfo {
  name: string;
  description?: string;
  id: string;
  properties: TypeProperty[];
  isDef?: boolean
}

@Component({
  selector: 'app-type-documentation',
  standalone: true,
  imports: [CommonModule, TypePropertyComponent],
  template: `
    <div [id]="this.type.id" class="flex flex-col gap-2 p-4 border border-stone-900 border-opacity-30 bg-stone-50 rounded-lg">
      <div class="text-2xl text-stone-900 p-4">{{this.type.name}}</div>
      <div class="text-base text-stone-700 p-4" *ngIf="this.type.description">
        {{this.type.description}}
      </div>
      <div class="flex flex-col gap-2 w-10/12 self-center p-4 ">
        <div>{{ !this.type.isDef ? 'Properties' : 'Definition'}}</div>
        <app-type-property *ngFor="let prop of this.type.properties"
        [property]="prop" />
      </div>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeDocumentationComponent {

  @Input() type!: TypeInfo;


}
