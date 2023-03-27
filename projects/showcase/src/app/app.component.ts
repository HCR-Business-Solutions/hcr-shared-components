import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule
} from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { heroHomeSolid } from '@ng-icons/heroicons/solid';
import {
  Breadcrumb,
  BreadcrumbsComponent,
  createBreadcrumbs,
  ToolbarComponent
} from 'projects/shared-components-lib/src/lib';
import { filter, tap } from 'rxjs';
@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-col">
      <div class="flex flex-col gap-0">
        <nyhcr-toolbar backgroundColor="rgb(180 83 9)" class="border-b border-stone-900 border-opacity-20">
          <div brand class="py-4 ml-2 text-white text-xl">
            Shared Components
          </div>
        </nyhcr-toolbar>
        <div class="bg-stone-50 border-b border-stone-900 border-opacity-20 py-4 px-2">
          <nyhcr-breadcrumbs [breadcrumbs]="this.breadcrumbs" />
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
    <ng-container *ngIf="this.navigationEnd$ | async" />
  `,
  styles: [],
  standalone: true,
  viewProviders: [provideIcons({ heroHomeSolid })],
  imports: [RouterModule, BreadcrumbsComponent, ToolbarComponent, CommonModule],
})
export class AppComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  navigationEnd$ = this._router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    tap(() => {
      this.updateBreadcrumbs();
    })
  );

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.updateBreadcrumbs();
  }

  private updateBreadcrumbs(): void {
    const next = [
      { url: '/', icon: 'heroHomeSolid' },
      ...createBreadcrumbs(this._activatedRoute.root),
    ];
    this.breadcrumbs = next;
  }
}
