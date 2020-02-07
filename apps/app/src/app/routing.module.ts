import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// @ts-ignore
import { LoginComponent } from '@app/auth';
import { DrinksComponent } from './drinks/drinks.component';

const routes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'drinks', component: DrinksComponent },
   { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class RoutingModule { }
