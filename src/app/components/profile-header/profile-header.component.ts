import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { 
   lucideSearch, 
   lucideShoppingCart, 
   lucideMessageCircle,
} from '@ng-icons/lucide';

@Component({
   selector: 'app-profile-header',
   templateUrl: './profile-header.component.html',
   styleUrls: ['./profile-header.component.scss'],
   providers: [provideIcons({ 
      lucideSearch,
      lucideShoppingCart,
      lucideMessageCircle 
   })],
   imports: [
      NgIcon,
      IonHeader,
      IonToolbar,
      HlmButtonImports,
      HlmInputImports
   ]
})
export class ProfileHeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

