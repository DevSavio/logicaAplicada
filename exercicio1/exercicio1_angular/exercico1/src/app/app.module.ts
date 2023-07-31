import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbMenuService,
  NbSidebarModule,
  NbThemeModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Exercicio1ListComponent } from './pages/exercicio1/exercicio1-list.component';
import { Exercicio2Component } from './pages/exercicio2/exercicio2.component';
import { Exercicio3Component } from './pages/exercicio3/exercicio3.component';
import { Exercicio4Component } from './pages/exercicio4/exercicio4.component';
import { Exercicio5Component } from './pages/exercicio5/exercicio5.component';
import { Exercicio6Component } from './pages/exercicio6/exercicio6.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercicio1ListComponent,
    Exercicio2Component,
    Exercicio3Component,
    Exercicio4Component,
    Exercicio5Component,
    Exercicio6Component,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbIconModule,
    NbCardModule,
    NbEvaIconsModule,
    BrowserAnimationsModule,
    NbButtonModule,
    NbInputModule,
    NbDatepickerModule.forRoot(),
  ],
  providers: [NbMenuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
