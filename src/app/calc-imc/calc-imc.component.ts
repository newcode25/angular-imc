import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-imc',
  templateUrl: './calc-imc.component.html',
  styleUrls: ['./calc-imc.component.css'],
})
export class CalcIMCComponent implements OnInit {
  width: number = 0;
  weight: number = 0;

  constructor() {}

  changeWidthValue(newWidth: number) {
    this.width = newWidth;
  }

  changeWeightValue(newWeight: number) {
    this.weight = newWeight;
  }

  ngOnInit(): void {}
}
