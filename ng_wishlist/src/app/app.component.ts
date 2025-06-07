import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WelcomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isDarkMode = false;
  access = false; // Estado global de acceso
  hideHeader = false; // Estado que controla si el header está oculto
  lastScrollTop = 0; // Definir lastScrollTop

  constructor(private renderer: Renderer2) {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.updateRootClass();
  }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  toggleTheme() {
    this.isDarkMode ? this.lightsUp() : this.lightsDown();
  }

  lightsUp() {
    this.isDarkMode = false;
    localStorage.setItem('theme', 'light');
    this.updateRootClass();
  }

  lightsDown() {
    this.isDarkMode = true;
    localStorage.setItem('theme', 'dark');
    this.updateRootClass();
  }

  private updateRootClass() {
    this.renderer.removeClass(
      document.documentElement,
      this.isDarkMode ? 'light-mode' : 'dark-mode'
    );
    this.renderer.addClass(
      document.documentElement,
      this.isDarkMode ? 'dark-mode' : 'light-mode'
    );
  }

  private onScroll() {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > this.lastScrollTop && currentScroll > 64) {
      this.hideHeader = true; // Ocultar el header al hacer scroll hacia abajo
    } else {
      this.hideHeader = false; // Mostrar el header al hacer scroll hacia arriba
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Actualizar la posición del scroll
  }

  // Método para cambiar el valor de 'access' y mostrar "Volver a inicio"
  goBackToStart() {
    this.access = false; // Cambiar el estado de 'access' a false
  }

  // Método para cambiar 'access' a true cuando el usuario accede a la wishlist
  goToWishlist() {
    this.access = true;
  }
}
