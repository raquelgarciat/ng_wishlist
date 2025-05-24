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
      name: 'Mofu wan',
      itemUrl: 'https://www.correos.es/es/es/particulares',
      img: '/1.jpg',
      category: 'pajamas',
      price: '10.99',
      country: 'japan',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam sem, et pharetra odio cursus sit amet. Nulla sed rutrum nibh. Pellentesque nulla odio, condimentum ac mauris sit amet, volutpat gravida nibh.',
    },
    {
      id: 2,
      name: 'Mofu tsuu',
      itemUrl: 'https://www.correos.es/es/es/particulares',
      img: '/2.jpg',
      category: 'cosmetics',
      price: '10.99',
      country: 'japan',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam sem, et pharetra odio cursus sit amet. Nulla sed rutrum nibh. Pellentesque nulla odio, condimentum ac mauris sit amet, volutpat gravida nibh.',
    },
    {
      id: 3,
      name: 'Mofu surii',
      itemUrl: 'https://www.correos.es/es/es/particulares',
      img: '/3.jpg',
      category: 'cows',
      price: '10.99',
      country: 'japan',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam sem, et pharetra odio cursus sit amet. Nulla sed rutrum nibh. Pellentesque nulla odio, condimentum ac mauris sit amet, volutpat gravida nibh.',
    },
    {
      id: 4,
      name: 'Mofu fow',
      itemUrl: 'https://www.correos.es/es/es/particulares',
      img: '/4.jpg',
      category: 'pajamas',
      price: '10.99',
      country: 'japan',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam sem, et pharetra odio cursus sit amet. Nulla sed rutrum nibh. Pellentesque nulla odio, condimentum ac mauris sit amet, volutpat gravida nibh.',
    },
    {
      id: 5,
      name: 'Mofu fai-fai',
      itemUrl: 'https://www.correos.es/es/es/particulares',
      img: '/5.jpg',
      category: 'pajamas',
      price: '10.99',
      country: 'japan',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam sem, et pharetra odio cursus sit amet. Nulla sed rutrum nibh. Pellentesque nulla odio, condimentum ac mauris sit amet, volutpat gravida nibh.',
    },
  ];
}
