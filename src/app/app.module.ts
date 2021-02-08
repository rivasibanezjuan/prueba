import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from 'highcharts-angular';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpService } from './emp.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { Grafico01Component } from './grafico01/grafico01.component';
import { Grafico02Component } from './grafico02/grafico02.component';
import { Grafico03Component } from './grafico03/grafico03.component';
import { Grafico04Component } from './grafico04/grafico04.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, HighchartsChartModule ],
  declarations: [ AppComponent, EmpleadosComponent, EmpDetailComponent, MessagesComponent, Grafico01Component, Grafico02Component, Grafico03Component, Grafico04Component],
  bootstrap:    [ AppComponent ],
  providers: [EmpService, MessageService, {provide: APP_BASE_HREF, useValue: '/empleados'}
  ]
})
export class AppModule { }
