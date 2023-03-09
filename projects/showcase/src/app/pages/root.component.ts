import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLinkComponent } from '../components';

@Component({
  standalone: true,
  imports: [CommonModule, ComponentLinkComponent],
  template: `
    <div class="p-4 flex flex-col">
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        <app-component-link name="Chat" [link]="['/', 'chat']" />

        <app-component-link name="User" [link]="['/', 'user']" />

        <app-component-link name="Layout" [link]="['/', 'layout']" />

      </div>
  </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent {}
