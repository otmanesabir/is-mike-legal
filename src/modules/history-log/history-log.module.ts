import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryLogComponent } from './components/history-log/history-log.component';
import { HistoryLogLineComponent } from './components/history-log-line/history-log-line.component';


@NgModule({
    declarations: [HistoryLogComponent, HistoryLogLineComponent], imports: [CommonModule], exports: [HistoryLogComponent, HistoryLogLineComponent]
})
export class HistoryLogModule {
}
