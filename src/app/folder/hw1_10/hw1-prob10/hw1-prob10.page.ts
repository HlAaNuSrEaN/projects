import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1-prob10',
  templateUrl: './hw1-prob10.page.html',
  styleUrls: ['./hw1-prob10.page.scss'],
})
export class Hw1Prob10Page implements OnInit {
  average
  ts1
  ts2
  ts3

  constructor() { }

  ngOnInit() {

    this.ts1 = Number(prompt ('Please enter your first test score.'))
    this.ts2 = Number(prompt ('Please enter your second test score.'))
    this.ts3 = Number(prompt ('Please enter your third test score.'))


    let avg = ((this.ts1 + this.ts2 + this.ts3)/3)
    this.average = avg
  }

}
