import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [HlmButtonImports, IonHeader, IonToolbar, IonTitle, IonContent]
})
export class LoginComponent  implements OnInit {
  constructor() { }

  ngOnInit() {}

}
