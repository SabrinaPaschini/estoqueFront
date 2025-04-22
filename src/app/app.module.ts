import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { HttpClientModule } from '@angular/common/http';   // ← importe isso

@NgModule({
  declarations: [AppComponent, HomeComponent, EstoqueComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
