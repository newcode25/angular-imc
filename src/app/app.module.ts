import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcIMCComponent } from './calc-imc/calc-imc.component';
import { TabelaImcComponent } from './tabela-imc/tabela-imc.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcIMCComponent,
    TabelaImcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
