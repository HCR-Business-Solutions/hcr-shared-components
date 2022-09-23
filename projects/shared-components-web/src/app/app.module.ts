import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponentsModule } from 'projects/ngx-shared-components/src/lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
