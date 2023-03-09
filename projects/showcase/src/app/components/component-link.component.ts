import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-link',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="this.handleInteract()"
      class="h-full w-full flex flex-col gap-2 items-center justify-evenly border border-stone-900 border-opacity-20 rounded-md"
    >
      <div class="text-xl text-stone-700 pt-4 px-4">
        {{this.name}}
      </div>
      <div class="pb-4 px-4">
        <ng-content />
      </div>
    </button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentLinkComponent {
  @Input() name!: string;
  @Input() link!: string[];

  constructor(private _router: Router) {}

  handleInteract(): void {
    this._router.navigate(this.link);
  }
}
