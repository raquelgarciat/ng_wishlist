import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule, ItemsComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  access = false;
}
