import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // 이 부분을 추가합니다.
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist.component';

@NgModule({
  declarations: [AppComponent, TodolistComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule], // FormsModule을 추가합니다.
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
