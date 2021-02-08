import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { Grafico01Component } from './grafico01/grafico01.component';
import { Grafico02Component } from './grafico02/grafico02.component';
import { Grafico03Component } from './grafico03/grafico03.component';
import { Grafico04Component } from './grafico04/grafico04.component';
const routes: Routes = [
  { path: 'empleados', component: EmpleadosComponent },
  {path: 'grafico01', component: Grafico01Component },
  {path: 'grafico02', component: Grafico02Component },
  {path: 'grafico03', component: Grafico03Component },
    {path: 'grafico04', component: Grafico04Component },
  { path: 'detail/:id', component: EmpDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }