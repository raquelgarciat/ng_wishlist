import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent {
  items = [
    {
      id: 1,
      name: 'Item 1',
    },
    {
      id: 2,
      name: 'Item 2',
    },
    {
      id: 1,
      name: 'Item 3',
    },
    {
      id: 1,
      name: 'Item 4',
    },
  ];
}
