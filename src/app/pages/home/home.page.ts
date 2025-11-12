import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonFooter } from '@ionic/angular/standalone';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { 
   lucideSearch, 
   lucideShoppingCart, 
   lucideMessageCircle,
   lucideHouse,
   lucideCircleUserRound,
   lucideShoppingBag,
   lucideTv,
   lucideBell
} from '@ng-icons/lucide';

@Component({
   selector: 'app-home',
   templateUrl: 'home.page.html',
   styleUrls: ['home.page.scss'],
   providers: [provideIcons({ 
      lucideSearch, 
      lucideShoppingCart, 
      lucideMessageCircle,
      lucideHouse,
      lucideCircleUserRound,
      lucideShoppingBag,
      lucideTv,
      lucideBell
   })],
   imports: [ 
      NgIcon,
      IonHeader, 
      IonToolbar, 
      IonContent,
      IonFooter, 
      HlmInputImports, 
      HlmButtonImports
   ],
})
export class HomePage {
   constructor() {}
}
