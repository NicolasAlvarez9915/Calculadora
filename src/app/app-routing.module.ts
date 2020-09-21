import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SumaComponent } from './suma/suma.component';
import { RestaComponent } from './resta/resta.component';
import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { DivisionComponent } from './division/division.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'suma', component: SumaComponent },
  { path: 'resta', component: RestaComponent },
  { path: 'multiplicacion', component: MultiplicacionComponent },
  { path: 'division', component: DivisionComponent},
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
