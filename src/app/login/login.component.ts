import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmCardImports } from '@spartan-ng/helm/card';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss'],
   imports: [
      HlmCardImports,
      HlmInputImports,
      HlmLabelImports,
      HlmButtonImports, 
      IonHeader, 
      IonToolbar, 
      IonTitle, 
      IonContent
   ]
})
export class LoginComponent  implements OnInit {
   constructor() { }

   ngOnInit() {}
}
