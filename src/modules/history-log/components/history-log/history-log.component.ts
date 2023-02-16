import { Component, Input, OnInit } from '@angular/core';
import { LogEventInterface } from '../../../../data/log-event.interface';

@Component({
  selector: 'app-history-log',
  templateUrl: './history-log.component.html',
  styleUrls: ['./history-log.component.scss']
})
export class HistoryLogComponent implements OnInit {
    @Input() logEvents?: LogEventInterface[];

    ngOnInit(): void {
    }

}
