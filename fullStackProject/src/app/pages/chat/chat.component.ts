import { WebSocketService } from './../../services/web-socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  title = 'Websocket Angular client ';
  userName!: string;
  message!: string;
  output: any[] = [];
  feedback!: string;

  constructor(private webSocketService: WebSocketService){}

  ngOnInit(): void {
    this.webSocketService.listen('typing').subscribe((data) => this.updateFeedback(data));
    this.webSocketService.listen('chat').subscribe((data) => this.updateMessage(data));
  }


  updateMessage(data: any): void {
    this.feedback = '';
    if(!!!data) return;
    this.output.push(data);
  }


  updateFeedback(data: any): void {
    this.feedback = `${data} is typing a message`;
  }

  messageTyping(): void {
    console.log(`${this.userName} is typing`);
    this.webSocketService.emit('typing',this.userName);
    
  }

  sendMessage(): void {
    console.log({
      message: this.message,
      handle: this.userName
    });

    this.webSocketService.emit('chat',{
      message: this.message,
      handle: this.userName
    });
    this.message = "";    
  }
}
