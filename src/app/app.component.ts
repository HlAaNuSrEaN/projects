import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: "Madlib", url: '/folder/madlib/madlib', icon: "newspaper"},
    { title: "MPG hw1_9", url: '/folder/hw1_9/hw1-prob9', icon: "car-sport"}, 
    { title: "Test Average hw1_10", url: '/folder/hw1_10/hw1-prob10', icon: "analytics"},
    { title: "City hw1_12", url: '/folder/hw1_12/hw1-prob12', icon: "map"},
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
