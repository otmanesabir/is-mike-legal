import { Component, Input } from '@angular/core';
import { LogEventInterface } from '../../../../data/log-event.interface';

@Component({
  selector: 'app-history-log-line',
  templateUrl: './history-log-line.component.html',
  styleUrls: ['./history-log-line.component.scss']
})
export class HistoryLogLineComponent {
    @Input() logEvent: LogEventInterface | undefined;

}
