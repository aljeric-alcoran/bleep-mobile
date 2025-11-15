import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
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
import { LoginService } from 'src/app/services/login.service';
import { debounceTime } from 'rxjs';

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
export class LoginFormComponent implements OnInit {
   private loginService = inject(LoginService);
   private destroyRef = inject(DestroyRef);
   private readonly formBuider = inject(FormBuilder);
   public formGroup: FormGroup = this.formBuider.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
   });
   
   hasError = signal<boolean>(false);
   errorMessage = signal<string>('');

   constructor() {}

   ngOnInit(): void {
      Object.keys(this.formGroup.controls).forEach(controlName => {
         this.formGroup.get(controlName)?.valueChanges
         .pipe(debounceTime(300))
         .subscribe(() => {
            this.hasError.set(false);
         });
      });
   }

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
      const subscription = this.loginService.onLoginUser(payload).subscribe({
         next: (response) => {
            console.log(response);
         },
         error: (error) => {
            this.hasError.set(true);
            this.errorMessage.set(error?.message);
         }
      });

      this.destroyRef.onDestroy(() => {
         subscription.unsubscribe();
      })
   }
}
