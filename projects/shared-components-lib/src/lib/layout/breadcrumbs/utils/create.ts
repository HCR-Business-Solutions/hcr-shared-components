import { ActivatedRoute } from "@angular/router";
import { Breadcrumb } from "../types";

export function createBreadcrumbs(
  route: ActivatedRoute,
  url: string = '',
  breadcrumbs: Breadcrumb[] = []
): Breadcrumb[] {
  const children: ActivatedRoute[] = route.children;

  if (children.length === 0) {
    return breadcrumbs;
  }

  for (const child of children) {
    const routeURL: string = child.snapshot.url
      .map((segment) => segment.path)
      .join('/');
    if (routeURL !== '') {
      url += `/${routeURL}`;
    }

    const crumb = child.snapshot.data['crumb'];

    if (crumb === null || crumb === undefined) {
      return createBreadcrumbs(child, url, breadcrumbs);
    }

    const isIcon = child.snapshot.data['isIcon'];
    const other = isIcon ? {icon: crumb} : {text: crumb};
    breadcrumbs.push({url, ...other});
    return createBreadcrumbs(child, url, breadcrumbs);
  }

  return breadcrumbs;
}
