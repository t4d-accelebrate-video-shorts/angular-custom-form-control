import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, multi: true,
      useExisting: forwardRef(() => NameInputComponent),
    }
  ],
})
export class NameInputComponent implements OnInit, ControlValueAccessor {

  public firstNameInput = new FormControl('');
  public lastNameInput = new FormControl('');

  private onChange: (name: string) => void;
  private onTouched: () => void;

  constructor() { }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    const [ firstName, lastName ] = String(obj).split(' ');
    this.firstNameInput.setValue(firstName);
    this.lastNameInput.setValue(lastName);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.firstNameInput.disable();
      this.lastNameInput.disable();
    } else {
      this.firstNameInput.enable();
      this.lastNameInput.enable();
    }
  }

  doInput() {
    this.onChange(this.firstNameInput.value + ' ' + this.lastNameInput.value);
  }

  doBlur() {
    this.onTouched();
  }

}
