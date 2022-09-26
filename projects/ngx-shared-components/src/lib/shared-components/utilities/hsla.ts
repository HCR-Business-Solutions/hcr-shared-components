import { clamp } from './math';

export interface IHSLA {
  h: number; // 0 - 360;
  s: number; // 0 - 100; append %
  l: number; // 0 - 100; append %
  a: number; // 0 - 1; if not defined default to 1;
}

export class HSLA {
  private h: number; // 0 - 360; default to 0
  private s: number; // 0 - 100; default to 0; append %
  private l: number; // 0 - 100; default to 0; append %
  private a: number; // 0 - 1; default to 1

  public static fromIHSLA(obj?: Partial<IHSLA>): HSLA;
  public static fromIHSLA(obj: Partial<IHSLA>): HSLA {
    return new HSLA(obj?.h, obj?.l, obj?.s, obj?.a);
  }

  public copy(): HSLA {
    return new HSLA(
      Number(this.h),
      Number(this.s),
      Number(this.l),
      Number(this.a)
    );
  }

  public replace(newHSLA: HSLA): void {
    this.h = newHSLA.h;
    this.s = newHSLA.s;
    this.l = newHSLA.l;
    this.a = newHSLA.a;
  }

  constructor(h?: number, s?: number, l?: number, a?: number);
  constructor(h: number, s: number, l: number, a?: number) {
    this.h = (h ?? 0) % 360;
    this.s = clamp(s ?? 0, 0, 100);
    this.l = clamp(l ?? 0, 0, 100);
    this.a = clamp(a ?? 1, 0, 1);
  }

  get isDark(): boolean {
    return this.l < 50;
  }

  get isLight(): boolean {
    return this.l >= 50;
  }

  get prop(): string {
    return `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
  }

  public setH(newH: number) {
    this.h = newH % 360;
  }

  public setS(newS: number) {
    this.s = clamp(newS, 0, 100);
  }

  public setL(newL: number) {
    this.l = clamp(newL, 0, 100);
  }

  public setA(newA: number) {
    this.a = clamp(newA, 0, 1);
  }

  public equals(compare: HSLA): boolean {
    return (
      this.h === compare.h &&
      this.s === compare.s &&
      this.l === compare.l &&
      this.a === compare.a
    );
  }

  lighten(amount: number): void {
    this.setL(this.l + amount);
  }

  darken(amount: number): void {
    this.setL(this.l - amount);
  }

  public getContrast(compare: HSLA): number {
    return (
      (Math.max(this.l, compare.l) + 0.05) /
      (Math.min(this.l, compare.l) + 0.05)
    );
  }

  public checkGuidelines(
    compare: HSLA,
    guidelines: 'AA' | 'AAA' = 'AA'
  ): boolean {
    return this.getContrast(compare) >= (guidelines === 'AA' ? 4.5 : 7);
  }

  public getTextColor(): HSLA {
    return new HSLA(0, 0, this.isDark ? 100 : 0, 1);
  }

  public getSimilarTextColor(
    guidelines: 'AA' | 'AAA' = 'AA',
    foregroundColor?: HSLA
  ): HSLA {
    foregroundColor = foregroundColor ?? this.copy();
    if (this.checkGuidelines(foregroundColor, guidelines))
      return foregroundColor;

    const tempColor = foregroundColor.copy();
    if (this.isDark) {
      tempColor.lighten(10);
    } else {
      tempColor.darken(10);
    }

    if (tempColor.equals(foregroundColor)) {
      return tempColor;
    }

    return this.getSimilarTextColor(guidelines, tempColor);
  }

  public getComplimentary(): HSLA {
    const copy = this.copy();
    copy.setH(copy.h + 180);
    return copy;
  }

}
