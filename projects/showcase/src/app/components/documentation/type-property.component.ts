import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface TypeProperty {
  key: string;
  type: string;
  typesection?: string;
}

@Component({
  selector: 'app-type-property',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
      *ngIf="this.href"
      class="w-full flex flex-col justify-center items-center gap-1 border border-stone-900 border-opacity-40 p-4 bg-white rounded-sm"
      [href]="this.href + (this.property.typesection ?? '#')"
      [ariaDisabled]="this.property.typesection"
      [class.cursor-pointer]="this.property.typesection"
      [class.cursor-default]="!this.property.typesection"
      [class.grid-cols-2]="this.property.key"
      [class.grid-cols-1]="!this.property.key"
    >

      <div class="text-lg" *ngIf="this.property.key">{{ this.property.key }}</div>
      <div class="text-sm italic text-stone-700">({{ this.property.type }})</div>
    </a>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypePropertyComponent {
  public href: string = '';
  @Input() property!: TypeProperty;
  constructor(private _router: Router) {}
  ngOnInit(): void {
    this.href = this._router.url.split('#')[0];
  }

}
