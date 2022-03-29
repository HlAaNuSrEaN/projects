import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1-prob12',
  templateUrl: './hw1-prob12.page.html',
  styleUrls: ['./hw1-prob12.page.scss'],
})
export class Hw1Prob12Page implements OnInit {

  constructor() { }
    charactersCity
    uppercaseCity
    lowercaseCity
    firstCity

  ngOnInit() {

    let city = prompt('Enter your favorite city.')

    this.charactersCity = city.split(' ').join('').length;
    this.uppercaseCity = city.toUpperCase()
    this.lowercaseCity = city.toLowerCase()
    this.firstCity = city.charAt(0)


  }

}
