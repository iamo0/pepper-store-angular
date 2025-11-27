import { Component } from '@angular/core';
import { AppHeader } from './app-header/app-header';
import { AppFooter } from './app-footer/app-footer';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet, */AppHeader, AppFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
