import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { FooterMenuComponent } from "src/app/components/footer-menu/footer-menu.component";
import { MainHeaderComponent } from "src/app/components/main-header/main-header.component";

@Component({
   selector: 'app-home',
   templateUrl: 'home.page.html',
   styleUrls: ['home.page.scss'],
   imports: [
      IonContent,
      FooterMenuComponent,
      MainHeaderComponent
   ],
})
export class HomePage {
   constructor() {}
}
