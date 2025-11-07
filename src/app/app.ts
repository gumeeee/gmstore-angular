import { Component, signal } from '@angular/core';
import { Catnavigation } from './components/catnavigation/catnavigation';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, Catnavigation],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gmstore');
}
