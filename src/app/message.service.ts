import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  messages : string[] = [];
  constructor() { }

  add(m: string): void{
    this.messages.push(m);
  }
  clear(): void{
    this.messages = [];
  }
}
