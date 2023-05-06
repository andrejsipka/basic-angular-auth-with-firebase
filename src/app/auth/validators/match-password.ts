import { Injectable } from "@angular/core";
import { ValidationErrors, Validator, AbstractControl } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
    public validate(formGroup: AbstractControl): ValidationErrors | null {
        const { password, passwordConfirmation } = formGroup.value;

        if(password === passwordConfirmation) {
            return null;
        } else {
            return { passwordsDontMatch: true };
        }
    }
}
