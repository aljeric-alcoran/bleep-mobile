import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { NavController } from '@ionic/angular';
import { 
   lucideShoppingCart, 
   lucideMessageCircle,
   lucideCircleUserRound
} from '@ng-icons/lucide';
import { RouterModule } from '@angular/router';

@Component({
   selector: 'app-profile-header',
   templateUrl: './profile-header.component.html',
   styleUrls: ['./profile-header.component.scss'],
   providers: [provideIcons({ 
      lucideShoppingCart,
      lucideMessageCircle,
      lucideCircleUserRound
   })],
   imports: [ 
      NgIcon,
      IonHeader,
      IonToolbar,
      HlmButtonImports,
      RouterModule
   ]
})
export class ProfileHeaderComponent  implements OnInit {

   constructor(
      private navCtrl: NavController
   ) { }

   ngOnInit() {}

   switchRoute(route: string) {
      this.navCtrl.navigateForward(route);
   }

}

