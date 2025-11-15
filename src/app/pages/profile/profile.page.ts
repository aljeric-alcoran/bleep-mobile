import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { ProfileHeaderComponent } from "src/app/components/profile-header/profile-header.component";
import { FooterMenuComponent } from "src/app/components/footer-menu/footer-menu.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, ProfileHeaderComponent, FooterMenuComponent]
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
