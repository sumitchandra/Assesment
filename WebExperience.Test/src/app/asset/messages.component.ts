import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
    templateUrl: 'app/Asset//messages.component.html',
    styleUrls: ['app/Asset//messages.component.css'],
    providers: [MessageService]
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
