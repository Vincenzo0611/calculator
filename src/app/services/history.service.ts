import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }
  history: string[] = [];
  addToHistory(operation: string) {
    this.history.unshift(operation);
  }
  getHistory() {
    return this.history;
  }
  clearHistory() {
    this.history = [];
  }
}
