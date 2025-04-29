import { Component } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  constructor(private historyServie : HistoryService ) { }

  operation : string = "";
  result : string = "";
  oldOperation : string = ""; 
  appendToExpression(value: string) {
    this.oldOperation = "";
    this.result = "";
    this.operation += value;
  }
  clear() {   
    this.operation = "";
    this.result = "";
    this.oldOperation = "";
  }

  resultExpression()
  {
    try {
      this.result = eval(this.operation);
      if (!(this.result.toString() === this.operation)) {
        this.historyServie.addToHistory(this.operation + " = " + this.result); 
      }
      this.oldOperation = this.operation;
      this.operation = this.result.toString();
    } catch (error) {
      this.result = "Error";
    }   
  }
}
