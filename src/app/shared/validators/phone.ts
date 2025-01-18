import { AbstractControl, ValidationErrors } from '@angular/forms';

export function phoneValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value || '';
  if (value !== '' && value !== '+7 ' && (value.length < 18 || value.length > 19)) {
    return { phone: 'Введите корректный номер телефона' };
  }
  return null;
}
