import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './views/bar/bar.component';
import { DonutHttpComponent } from './views/donut-http/donut-http.component';
import { DonutComponent } from './views/donut/donut.component';
import { DoubleBarsComponent } from './views/double-bars/double-bars.component';

const routes: Routes = [
  { path: 'bar', component: BarComponent },
  { path: 'doble-bars', component: DoubleBarsComponent },
  { path: 'donut', component: DonutComponent },
  { path: 'donut-http', component: DonutHttpComponent },
  { path: '**', redirectTo: 'bars' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraficsRoutingModule {}
