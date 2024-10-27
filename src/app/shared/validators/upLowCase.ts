import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function upLowCase(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if (passwordRegex.test(control.value)) {
      return null;
    }
    return { upLowCase: 'Введите верхний/нижний регистр' };
  };
}
