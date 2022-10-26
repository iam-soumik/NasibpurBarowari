import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/model/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events : Events[] = [];
  constructor(private eventService : EventService) { }

  ngOnInit(): void {
    this.events = this.eventService.getEventsList();
  }

  knowMore(events : Events){
    console.log("Clicked Events ---> ", events);
  }

}
