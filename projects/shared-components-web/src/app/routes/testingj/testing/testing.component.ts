import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IToolbarConfig } from 'projects/ngx-shared-components/src/lib/shared-components/components/toolbar';
import { HSLA } from 'projects/ngx-shared-components/src/lib/shared-components/utilities';

@Component({
  template: `
<lib-toolbar-brand-menu subAppName="Sub App Name" appName="APP NAMEEEEEEEE" logo="this logo" altLogo="this is the alt logo" type="dhcr" [toolbarConfigOverride]="this.toolbarConfig"></lib-toolbar-brand-menu>
  `,
  styles: [
  ]
})
export class TestingComponent implements OnInit {

  toolbarConfig: IToolbarConfig = {
  styles: {
    default: {
      color: new HSLA (0,0,100),
      boxShadow: '25px 0px 10px rgb(0 0 0 .5)',
      padding: '0 .75em 0 .75em',
      border: 'solid 0px red',
    }
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
