import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[libApplyCssProps]',
})
export class ApplyCssPropsDirective implements OnInit, OnChanges {
  @Input('libApplyCssProps') customProps: Record<string, string> = {};

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this._setProps();
  }

  ngOnChanges(): void {
    this._setProps();
  }

  /**
   * Set the custom variable properties on the element using props from input
   *
   *
   * @returns void
   */
  private _setProps(): void {
    // get the nativeelement
    const el = this.el.nativeElement;

    // gatekeeper on el, make sure exists return if not
    if (!el) return;

    // gatekeeper on customProps, make sure exists return if not
    if (!this.customProps) return;

    // gather all custom props that are variables as variableProps
    const variableProps = Object.keys(this.customProps).filter((key) =>
      key.startsWith('--')
    );

    // loop through variableProps and set them on the element
    variableProps.forEach((key) => {
      el.style.setProperty(key, this.customProps[key]);
    });
  }
}
