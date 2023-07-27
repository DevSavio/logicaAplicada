import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbButtonModule,
  NbCardModule,
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

@NgModule({
  declarations: [AppComponent, Exercicio1ListComponent],
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
  ],
  providers: [NbMenuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
