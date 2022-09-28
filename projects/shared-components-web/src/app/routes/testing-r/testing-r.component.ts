import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-r',
  template: `
    <div class="bar">
      <lib-common-menu menuPosition="bottom-right"></lib-common-menu>
    </div>
  `,
  styles: [
    `
      .bar {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
      }
    `,
  ],
})
export class TestingRComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
