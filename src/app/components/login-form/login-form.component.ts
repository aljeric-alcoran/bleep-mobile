import { Component, inject, signal } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { AlertComponent } from "../alert/alert.component";
import { 
   FormBuilder, 
   FormGroup, 
   ReactiveFormsModule,
   Validators
} from '@angular/forms';

@Component({
   selector: 'app-login-form',
   templateUrl: './login-form.component.html',
   styleUrls: ['./login-form.component.scss'],
   imports: [
      ReactiveFormsModule,
      HlmButtonImports,
      HlmInputImports,
      HlmLabelImports,
      HlmCardImports,
      AlertComponent,
   ]
})
export class LoginFormComponent {
   private readonly _formBuider = inject(FormBuilder);
   public formGroup: FormGroup = this._formBuider.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
   })
   hasError = signal<boolean>(false);

   constructor() {}

   isFormInvalid(formControlName: string, error: string) {
      return (
        this.formGroup.controls[formControlName].touched &&
        this.formGroup.controls[formControlName].invalid &&
        this.formGroup.controls[formControlName].hasError(error)
      );
    }

   onSubmit() {
      if (this.formGroup.invalid) return;
      const payload = this.formGroup.value;
      console.log(payload);
   }
}
