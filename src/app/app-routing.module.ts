import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'module-1',
    loadChildren: () =>
      import('./module1/module1.module').then((m) => m.Module1Module),
  },
  {
    path: 'module-2',
    loadChildren: () =>
      import('./module2/module2.module').then((m) => m.Module2Module),
  },
  {
    path: 'module-3',
    loadChildren: () =>
      import('./module3/module3.module').then((m) => m.Module3Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
