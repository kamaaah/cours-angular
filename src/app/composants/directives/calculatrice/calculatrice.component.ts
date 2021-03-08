import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {


 number1: number = 0;
 number2: number = 0;
//  calculs: Array<any> =[this.number1, this.number2];
  result!:number;
  constructor() { }

  ngOnInit(): void {
  }

  somme(){
    this.result = this.number1+ this.number2;
  }
  multiple(){
    this.result = this.number1* this.number2;
  }
  div(){
    this.result = this.number1 / this.number2;
  }

  soustraction(){
    this.result= this.number1 - this.number2;
  }

  // faireOperation(){
  //   this.calculs.push(this.number1, this.number2);
  //   this.number1=0 ;
  //   this.number2=0;
  // }

  num1!: number;
	num2!: number;
	result1!: number;
	sum() {
		this.result1 = this.num1 + this.num2;
	}
	diff() {
		this.result1 = this.num1 - this.num2;
	}
	mult() {
		this.result1 = this.num1 * this.num2;
	}
	div1() {
		this.result1 = this.num1 / this.num2;
	}
}

