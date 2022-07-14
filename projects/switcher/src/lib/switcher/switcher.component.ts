import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef, Inject,
  Input
} from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from "@angular/forms";
import { SwitcherConfigI } from "../models/config.model";
import { CONFIG_TOKEN } from "../token";

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SwitcherComponent),
    multi: true
  }]
})

export class SwitcherComponent implements ControlValueAccessor {
  checked: boolean = false;
  @Input() disabled: boolean = false;
  onChange = (value: boolean) => {};
  onTouch = () => {};
  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    @Inject(CONFIG_TOKEN) private readonly styleConfig: SwitcherConfigI,
    ) { }

  get sliderColor(): Record<'background', string > {
    const key = this.checked ? 'sliderChecked' : 'sliderUnChecked';
    return { background: this.styleConfig[key] };
  }

  get bgColor():  Record<'background', string> {
    return { background: this.styleConfig.backgroundColor };
  }

  writeValue(value: boolean): void {
    this.checked = value;
    this.changeDetectorRef.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.changeDetectorRef.markForCheck();
  }

  changeCheck(): void {
    if(!this.disabled) {
      this.checked = !this.checked
      this.onTouch()
      this.onChange(this.checked)
    }
  }

}
