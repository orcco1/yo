import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio de sesion', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Asignaciones', url: '/folder/Outbox', icon: 'paper-plane' }
  ];
  public labels = [];
  constructor() {}
}
