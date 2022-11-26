import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficsRoutingModule } from './grafics-routing.module';

import { DonutHttpComponent } from './views/donut-http/donut-http.component';
import { DonutComponent } from './views/donut/donut.component';
import { DoubleBarsComponent } from './views/double-bars/double-bars.component';
import { BarComponent } from './views/bar/bar.component';

@NgModule({
  declarations: [
    DoubleBarsComponent,
    DonutComponent,
    DonutHttpComponent,
    BarComponent,
  ],
  imports: [CommonModule, GraficsRoutingModule],
})
export class GraficsModule {}
