import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficsRoutingModule } from './grafics-routing.module';

import { DonutHttpComponent } from './views/donut-http/donut-http.component';
import { DonutComponent } from './views/donut/donut.component';
import { DoubleBarsComponent } from './views/double-bars/double-bars.component';
import { BarsComponent } from './views/bars/bars.component';

@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarsComponent,
    DonutComponent,
    DonutHttpComponent,
  ],
  imports: [CommonModule, GraficsRoutingModule],
})
export class GraficsModule {}
