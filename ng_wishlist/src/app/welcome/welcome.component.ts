import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule, ItemsComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  @Input() access: boolean = false; // Recibe 'access' desde el AppComponent
  @Output() accessChange = new EventEmitter<boolean>(); // Emite cambios a 'AppComponent'

  ngOnInit() {
    console.log('Valor de access recibido en WelcomeComponent:', this.access);
  }

  // Método para cambiar 'access' y emitir el cambio al padre
  setAccess(value: boolean) {
    this.access = value;
    this.accessChange.emit(this.access); // Emitir el cambio
  }
}
