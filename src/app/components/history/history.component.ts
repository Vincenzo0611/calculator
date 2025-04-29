import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  history: string[] = [];
  constructor(private historyService: HistoryService) {}

  ngOnInit() : void{
    this.history = this.historyService.getHistory();
    console.log(this.history);
    console.log("?");
  }

  clearHistory() {
    this.historyService.clearHistory();
    this.history = this.historyService.getHistory();
  }

}
