import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create-product-flow-first-step',
    loadChildren: () =>
      import(
        './products/screens/create-product-flow-first-step/create-product-flow-first-step.module'
      ).then((m) => m.CreateProductFlowFirstStepModule),
  },
  {
    path: 'create-product-flow-second-step',
    loadChildren: () =>
      import(
        './products/screens/create-product-flow-second-step/create-product-flow-second-step.module'
      ).then((m) => m.CreateProductFlowSecondStepModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
