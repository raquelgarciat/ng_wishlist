import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WelcomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isDarkMode = false;

  constructor(private renderer: Renderer2) {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.updateRootClass();
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
    // Remove existing classes and add the appropriate one to <html>
    this.renderer.removeClass(
      document.documentElement,
      this.isDarkMode ? 'light-mode' : 'dark-mode'
    );
    this.renderer.addClass(
      document.documentElement,
      this.isDarkMode ? 'dark-mode' : 'light-mode'
    );
  }
}

// ng run ng_wishlist:deploy