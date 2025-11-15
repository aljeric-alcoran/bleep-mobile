import { Component, computed, input, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert, lucideCircleCheck } from '@ng-icons/lucide';
import { HlmAlert, HlmAlertDescription, HlmAlertIcon, HlmAlertTitle } from '@spartan-ng/helm/alert';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
   selector: 'app-alert',
   templateUrl: './alert.component.html',
   styleUrls: ['./alert.component.scss'],
   imports: [HlmAlertDescription, HlmAlert, HlmAlertIcon, HlmAlertTitle, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideTriangleAlert, lucideCircleCheck })],
})
export class AlertComponent  implements OnInit {
   status = input<'success' | 'error'>('success');
   message = input<string>('');
   alertHeader = computed(() => this.status() === 'success' ? 'Success!' : 'Error!');
   alertVariant = computed(() => this.status() === 'success' ? 'success' : 'destructive');
   alertIcon = computed(() => this.status() === 'success' ? 'lucideCircleCheck' : 'lucideTriangleAlert');

   constructor() {}

   ngOnInit() {}

}
