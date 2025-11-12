import { Component, OnInit, signal } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { AlertComponent } from "../alert/alert.component";

@Component({
   selector: 'app-login-form',
   templateUrl: './login-form.component.html',
   styleUrls: ['./login-form.component.scss'],
   imports: [
      HlmButtonImports,
      HlmInputImports,
      HlmLabelImports,
      HlmCardImports,
      AlertComponent
   ]
})
export class LoginFormComponent  implements OnInit {
   hasError = signal<boolean>(false);
   constructor() { }

   ngOnInit() {}

}
