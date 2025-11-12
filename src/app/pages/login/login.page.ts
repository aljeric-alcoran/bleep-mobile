import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from "src/app/components/login-form/login-form.component";
import { IonContent } from '@ionic/angular/standalone';
import { HlmCardImports } from '@spartan-ng/helm/card';

@Component({
   selector: 'app-login',
   templateUrl: './login.page.html',
   styleUrls: ['./login.page.scss'],
   imports: [
      LoginFormComponent,
      HlmCardImports,
      IonContent,
   ]
})
export class LoginComponent  implements OnInit {
   constructor() { }

   ngOnInit() {}
}
