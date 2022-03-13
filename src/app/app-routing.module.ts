import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialComponent } from './components/financial/financial.component';

const routes: Routes = [{path:'', component:FinancialComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
