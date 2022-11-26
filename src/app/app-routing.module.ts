import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'grafics',
    loadChildren: () =>
      import('./grafics/grafics.module').then((m) => m.GraficsModule),
  },
  {
    path: '**',
    redirectTo: 'grafics',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
