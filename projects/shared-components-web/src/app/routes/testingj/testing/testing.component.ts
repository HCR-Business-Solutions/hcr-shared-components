import { Component, OnInit } from '@angular/core';

@Component({
  template: `
<lib-toolbar-brand-menu subAppName="Sub App Name" appName="APP NAMEEEEEEEE" logo="this logo" altLogo="this is the alt logo"></lib-toolbar-brand-menu>
  `,
  styles: [
  ]
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
