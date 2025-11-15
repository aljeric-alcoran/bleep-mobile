import { Component, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
   lucideHouse,
   lucideCircleUserRound,
   lucideShoppingBag,
   lucideTv,
   lucideBell
} from '@ng-icons/lucide';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IonToolbar, IonFooter } from "@ionic/angular/standalone";
import { RouterModule } from '@angular/router';

@Component({
   selector: 'app-footer-menu',
   templateUrl: './footer-menu.component.html',
   styleUrls: ['./footer-menu.component.scss'],
   providers: [provideIcons({
      lucideHouse,
      lucideCircleUserRound,
      lucideShoppingBag,
      lucideTv,
      lucideBell
   })],
   imports: [
      IonFooter, 
      IonToolbar, 
      NgIcon,
      RouterModule
   ]
})
export class FooterMenuComponent  implements OnInit {
   menuList = [
      { label: 'Home', icon: 'lucideHouse', route: '/home' },
      { label: 'Mall', icon: 'lucideShoppingBag', route: '/mall' },
      { label: 'Live & Videos', icon: 'lucideTv', route: '/live-and-videos' },
      { label: 'Notifications', icon: 'lucideBell', route: '/notifications' },
      { label: 'Profile', icon: 'lucideCircleUserRound', route: '/profile' },
   ];
   activeRoute!: string;

   constructor(
      private router: Router,
   ) {
      this.router.events
         .pipe(filter(event => event instanceof NavigationEnd))
         .subscribe((event: NavigationEnd) => {
            this.activeRoute = event.urlAfterRedirects
         });
   }

   ngOnInit() {}
}
