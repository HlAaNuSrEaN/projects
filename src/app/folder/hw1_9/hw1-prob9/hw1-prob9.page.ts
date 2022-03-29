import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1-prob9',
  templateUrl: './hw1-prob9.page.html',
  styleUrls: ['./hw1-prob9.page.scss'],
})
export class Hw1Prob9Page implements OnInit {

  mpg

  constructor() { }

  ngOnInit() {

let miles = Number(prompt('Please enter number of miles driven.'))
let gal = Number(prompt('Please enter number of gallons used.'))

let mpg = (miles / gal)
this.mpg = `The MPG = ${mpg}`


  }

}
