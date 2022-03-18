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

    let ts1 = Number(prompt ('Plese enter test score.'))
    let ts2 = Number(prompt ('Plese enter test score.'))
    let ts3 = Number(prompt ('Plese enter test score.'))


    let avg = ((ts1 + ts2 + ts3)/3)
    this.average = avg
  }

}
